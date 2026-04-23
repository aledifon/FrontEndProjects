import { Injectable } from "@angular/core";
import { Film } from "../models/film";

// Marks the service as injectable and registers it in Angular's root injector.
// The service will be available as a singleton across the entire application. 
// (equivalent to ServiceProvider on C#).
@Injectable({
    providedIn: "root"      
})
export class FilmService{

    private _films: Array<Film>;
    get films(): Array<Film> {
        return this._films;
    }

    greetingsService(){
        console.log("Hi from my service!!");
    }

    constructor(){
        this._films = [
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

    // Alternative of using getter
    // getFilms() : Array<Film>{
    //     return this._films;
    // }

}