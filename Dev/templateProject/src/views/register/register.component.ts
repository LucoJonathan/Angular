import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  confirmPasswordControl : FormControl = new FormControl<any>("")

  form: FormGroup = new FormGroup<any>({
    id: new FormControl(0),
    username: new FormControl("", {validators: [Validators.required]}),
    email: new FormControl("", {validators: [Validators.required, Validators.email]}),
    password: new FormControl("", {validators: [Validators.required, Validators.minLength(6)]})
  })

  onSubmit(){
    console.log("USER : ", this.form.value)
  }
}

export interface User{
  id: number,
  username: string,
  email: string,
  password: string
}
