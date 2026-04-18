import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {

  childName: string = "Drag it";

  // Get the var 'myParentName' passed as a property input to the 
  // template associated to this child component
  @Input() myParentName: string = "";

  // Create an EventEmitter to send some data upwards to the parent component
  @Output() greetChild = new EventEmitter();
    
  // Data sent to the parent component
  sendGreetings(){  
      this.greetChild.emit("Hi. How are you dad? Greetings :");        
  }
}
