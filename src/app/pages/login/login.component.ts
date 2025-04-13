import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

loginForm: FormGroup;

constructor(private fb: FormBuilder, private router: Router) {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })
  console.log("Sikeres bejelentkezés");
}

login() {
  if(this.loginForm.valid){
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
  }
}

}
