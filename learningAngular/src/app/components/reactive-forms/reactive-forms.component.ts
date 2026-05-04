import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    age: new FormControl("", [
      Validators.required,
      Validators.min(18)
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  onSubmit(){
    if(this.form.valid){
      console.info("Form sent: ", this.form.value);
    }
    else{
      console.warn("Invalid form!!");
    }
  }

}
