import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
  ]
})
export class RegisterModule { }
