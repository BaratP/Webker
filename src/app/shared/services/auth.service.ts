import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, authState, UserCredential, createUserWithEmailAndPassword, User} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: Observable<User | null>;
  
  constructor(private auth: Auth, private router: Router, private firestore: Firestore,){
    this.currentUser = authState(this.auth);
  }
  
  signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async signUp(email: string, password: string, userData: Partial<User>): Promise<UserCredential> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth, 
        email, 
        password
      );
      
      await this.createUserData(userCredential.user.uid, {
        ...userData,
        uid: userCredential.user.uid,
        email: email,
      });

      return userCredential;

    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }

  private async createUserData(userId: string, userData: Partial<User>): Promise<void> {
    const userRef = doc(collection(this.firestore, 'Users'), userId);
    
    return setDoc(userRef, userData);
  }

  signOut(): Promise<void> {
    
    localStorage.setItem('isLoggedIn', 'false');
    return signOut(this.auth).then(() => {
      this.router.navigateByUrl('/main');
    });
  }
  
  isLoggedIn(): Observable<User | null> {
    return this.currentUser;
  }
  
  updateLoginStatus(isLoggedIn: boolean): void {
    localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
  }
}