import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
  email: FormControl = new FormControl<any>("", {validators: [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
    ]});
  password: FormControl = new FormControl<any>("", {validators: [
      Validators.required,
      Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}$")
    ]});

  isInvalidEmail(){
    return (this.email.invalid && (!this.email.untouched  || this.email.dirty))
  }

  isInvalidPassword(){
    return (this.password.invalid && (!this.password.untouched  || this.password.dirty))
  }
}
