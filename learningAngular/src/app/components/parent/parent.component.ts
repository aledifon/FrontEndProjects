import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {

  // Property to be sent to the child component through 
  // the 'myParentName' attribute on the selector of 
  // the child component
  parentName: string = "DAK Games";

  greetReceived: string = "";

  ReceiveGreetings(greet: string){
    this.greetReceived = greet;
  }

}
