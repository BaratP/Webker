import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';



@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnDestroy {

  loginForm: FormGroup;
  authSubscription?: Subscription;

  constructor(private fb: FormBuilder, private router: Router,private authService: AuthService) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
}

login() {
  if(this.loginForm.valid){
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.signIn(email, password).then(userCredential => {
        console.log('Signin successful:', userCredential.user);
        this.authService.updateLoginStatus(true);
        this.router.navigateByUrl('/main');
      })
      .catch(error => {
        console.error('Signin error:', error);
      });
  }
}

goToSignup(){
   this.router.navigateByUrl('/signup');
}

ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }

}
