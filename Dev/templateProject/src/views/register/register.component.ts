import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {AbstractFormComponent} from '../../tools/abstract-form-component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthResponse, AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent extends AbstractFormComponent {

  passwordControl: FormControl = new FormControl("", {validators: [
      Validators.required,
      //this.password,
      Validators.minLength(6)
    ]})
  confirmPasswordControl : FormControl = new FormControl<any>("", {validators: [
      Validators.required,
      this.mustMatch(this.passwordControl)
    ]})

  form: FormGroup = new FormGroup<any>({
    id: new FormControl(0),
    username: new FormControl("", {validators: [Validators.required]}),
    email: new FormControl("", {validators: [Validators.required, Validators.email]}),
    password: this.passwordControl
  })

  constructor(private auth: AuthService, private router: Router) {
    super();
  }

  onSubmit$(): void {
   this.auth.register(this.form.value).subscribe(() => this.router.navigate(['/login']))// .subscribe pour envoyer la requête si il est pas la c'est juste la prépa
  }
}

export interface User {
  id: number,
  username: string,
  email: string,
  password: string
}


