import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials : Credentials = {
    email: "",
    password: ""
  }

  onSubmit(form: HTMLFormElement) {
    if(form.checkValidity()) {
      console.log(this.credentials)
      form.reset()
    }
  }
}

export interface Credentials {
  email: string,
  password: string
}
