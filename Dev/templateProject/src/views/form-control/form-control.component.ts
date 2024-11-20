import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {

  control: FormControl = new FormControl<any>("");
}
