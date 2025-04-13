import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces/User';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

 signupForm :FormGroup;

 
 constructor(private fb: FormBuilder, private router: Router) {
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
    this.router.navigate(['/main']);
  }
  
  }


}
