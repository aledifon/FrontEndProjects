import { Component } from '@angular/core';
import { Film } from '../../models/film';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-cinema',
  imports: [FormsModule, NgStyle],
  templateUrl: './cinema.html',
  styleUrl: './cinema.scss',
})
export class Cinema {

  public title: string;
  public films: Array<Film>;

  //Work with forms & two way data binding
  public myFilm: string = "";
  public filmsWoData: string[] = [];

  public myColor: string = "#FFFFFF"

  constructor(){
    this.title = "Models";

    this.films = [
      new Film(1, "El padrino","Mafia","Copola",1976,"Prime",false),
      new Film(2, "Pepe","Mafia","Copola",1976,"Prime",false),
      new Film(3, "BB","Mafia","Copola",1976,"Prime",false),
      new Film(4, "CC","Mafia","Copola",1976,"Prime",false),
      new Film(5, "DD","Mafia","Copola",1976,"Prime",false),
      new Film(6, "EE","Mafia","Copola",1976,"Prime",false),
      new Film(7, "FF","Mafia","Copola",1976,"Prime",false),
      new Film(8, "GG","Mafia","Copola",1976,"Prime",false),
      new Film(9, "HH","Mafia","Copola",1976,"Prime",false),
      new Film(10, "II","Mafia","Copola",1976,"Prime",false)      
    ];
  }

  ngOnInit(){
    console.log(this.films);

    this.films[1].title = "Pepe el vaquero";
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
