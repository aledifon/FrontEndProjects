import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {

  public name = '';
  public email = '';
  public age = 18;
  public password = '';


  onSubmit(){
    console.log(this.name, this.email, this.age, this.password);
  }
}
