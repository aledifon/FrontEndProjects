import { Component } from '@angular/core';
import { Film } from '../../models/film';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-cinema',
  imports: [FormsModule, NgStyle],
  // providers: [FilmService],        // Registers FilmService at component level if 
                                      // it is not provided via 'providedIn'.
                                      // This creates a new instance of the service 
                                      // scoped to this component.
  templateUrl: './cinema.html',
  styleUrl: './cinema.scss',
})
export class Cinema {

  public title: string;
  public films: Array<Film>;

  //Work with forms & two way data binding
  public myFilm: string = "";
  public filmsWoData: string[] = [];

  public myColor: string = "#ffffff"
  
  constructor(private filmService: FilmService){
    // Angular injects FilmService via the DI container (constructor injection) .
    // The 'private' modifier creates and assigns a class property automatically.
    // This keeps the service internal to the component (not accessible from the template),
    // which is a common practice to enforce encapsulation of business logic.

    this.title = "Models";

    // Fill the films array using the FilmService
    this.films = filmService.films;                 // via getter
    // this.films = filmService.getFilms();         // via method
  }

  ngOnInit(){
    console.log(this.films);

    this.films[1].title = "Pepe el vaquero";    

    // Example call to injected service
    this.filmService.greetingsService();
  }

  // ngDoCheck(){
  //   console.log(this.myFilm);
  // }

  showFilm():void{
    alert(this.myFilm);
  }

  addFilm():void{
    // this.filmsWoData.push(this.myFilm);

    // let inversedFilms = this.films.reverse();
    // let id = inversedFilms[0].id +1;    
    let id = this.films[this.films.length-1].id + 1;
    let newFilm = new Film(id, this.myFilm);

    console.log(newFilm);

    this.films.push(newFilm);
  }

  deleteFilm(index: number){
      this.films.splice(index, 1);
  }

  focusing(){
    console.warn("You are inside of the films input!");
  }

  focusingOut(){
    console.warn("You are outside of the films input!");
  }

  pressingKeys(event: KeyboardEvent){
    console.info("You are pressing the key " + event.key + "!");
  }

}
