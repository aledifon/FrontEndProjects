import { Component } from '@angular/core';

@Component({
  selector: 'app-film',
  imports: [],
  templateUrl: './film.html',
  styleUrl: './film.scss',
})
export class Film {

  // Runs once after Angular has initialized all the component's inputs.
  ngOnInit(){
    console.log("The film component is running!!");
  }

  // Runs once before the component is destroyed.
  ngOnDestroy(){
    console.log("The film component has been destroyed!!");
  }
}
