import { Component} from '@angular/core';
import { Film } from '../film/film';

@Component({
    selector: "product",
    imports: [Film],
    templateUrl: "./product.component.html",
    styleUrl: "./product.component.scss"
})
export class ProductComponent{

    public Name: string;
    public Brand: string;
    public Price: number;
    public Description: string;

    public showFilms: boolean = true;

    constructor(){
        this.Name = "Portable PC";
        this.Brand = "Asus";
        this.Price = 400;
        this.Description = "This pc is really powerful";        

        console.log("The product component was loaded!!");        
    }

    // Lifecycle Hooks

    // Runs once after Angular has initialized all the component's inputs. 
    ngOnInit(){
       console.log("The component is initialized");
    }

    // 	Runs once after the component's view has been initialized.
    ngAfterViewInit(){
        console.log("The view is loaded");
    }

    // Runs every time this component is checked for changes.
    ngDoCheck(){
        console.log("Component updated");
    }

    changeName(){
        this.Name = "Laptop asus wii";
    }

    hideFilms(value: boolean){
        this.showFilms = value;
    }
}