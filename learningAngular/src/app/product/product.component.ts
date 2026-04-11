import { Component } from '@angular/core';
import { Film } from '../film/film';
import { Sellings } from '../sellings/sellings';
import { User } from '../user/user';

@Component({
    selector: "product",
    imports: [Film, User, Sellings],
    templateUrl: "./product.component.html",
    styleUrl: "./product.component.scss"
})
export class ProductComponent{

    public Name: string;
    public Brand: string;
    public Price: number;
    public Description: string;

    constructor(){
        this.Name = "Portable PC";
        this.Brand = "Asus";
        this.Price = 400;
        this.Description = "This pc is really powerful";

        console.log("The product component was loaded!!");        
    }

}