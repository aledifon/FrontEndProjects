import { Component } from '@angular/core';

@Component({
  selector: 'app-film',
  imports: [],
  templateUrl: './film.html',
  styleUrl: './film.scss',
})
export class Film {

  ngOnInit(){
    console.log("The film component is running!!");
  }

  ngOnDestroy(){
    console.log("The film component has been destroyed!!");
  }
}
