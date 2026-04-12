import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe } from '@angular/common';
import { ChangeLettersPipe } from '../pipes/changeLetters.pipe';
import { Sellings } from '../sellings/sellings';
import { ProductComponent } from "../product/product.component";
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-user',
  imports: [Sellings, ProductComponent, 
          UpperCasePipe, LowerCasePipe, 
          DatePipe, TitleCasePipe,
          ChangeLettersPipe],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {

  web = "https://google.es";
  redirect = false;

  paddleBrand = [
    {id: 1, name: "Siux" },
    {id: 2, name: "Bullpadel" },
    {id: 3, name: "Kombat" },
    {id: 4, name: "Head" },
    {id: 5, name: "Adidas" }
  ];  

  user = {
    id: 1,
    name: "Alejandro Diaz",
    nick: "aledifon",
    rol: "admin"
  };

  // date = new Date(2030, 12, 25);
  date = new Date("2030-12-25");

  ngOnInit(){
    this.paddleBrand = [];
  }  

  toogleValue(){
    this.redirect = !this.redirect;
  }
  toogleFor(){
    if (this.paddleBrand.length === 0 )
      this.paddleBrand = [
        {id: 1, name: "Siux" },
        {id: 2, name: "Bullpadel" },
        {id: 3, name: "Kombat" },
        {id: 4, name: "Head" },
        {id: 5, name: "Adidas" }
      ];
    else
      this.paddleBrand = []; 
  }
  toogleSwitch(){
    if (this.user.rol == "admin")
      this.user.rol = "user";
    else if (this.user.rol == "user")
      this.user.rol = "guest"; 
    else
      this.user.rol = "admin";
  }

}
