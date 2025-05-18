import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/interfaces/User';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { AuthService } from '../../shared/services/auth.service';



@Component({
  selector: 'app-signup',
  imports: [MatCardModule, ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule,
    MatInputModule, MatRadioModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm :FormGroup;

 
 constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  this.signupForm = this.fb.group({
    id: [''],
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
    }

  
  OnSubmit() {
    if(this.signupForm.valid){
    const user: User = {
      id: this.signupForm.get('username')?.value,
      username: this.signupForm.get('username')?.value,
      email: this.signupForm.get('email')?.value,
      firstname: this.signupForm.get('firstname')?.value,
      lastname: this.signupForm.get('lastname')?.value,


    }
    console.log(user);

       const  email = this.signupForm.get('email')?.value;
       const password = this.signupForm.get('password')?.value;


    this.authService.signUp(email, password, user)
      .then(userCredential => {
        console.log('Registration succesful:', userCredential.user);
        this.authService.updateLoginStatus(true);
        this.router.navigateByUrl('/main');
      })
      .catch(error => {
        console.error('Regisztrációs hiba:', error);})

    this.router.navigate(['/main']);
  }
  
  }

  goToSignin(){
    this.router.navigate(['/signin']);
  }


}
