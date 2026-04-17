import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basket',
  imports: [FormsModule],
  templateUrl: './basket.html',
  styleUrl: './basket.scss',
})
export class Basket {

  public storeName: string = 'My Store';
  public productsAmount: number = 0;   // Total of products on the basket
  private _totalBasket: number = 0;      // Total price of the basket (with getter/setter)
  set totalBasket(value: number){ 
    this._totalBasket = value;
  }
  get totalBasket() {    
    return  parseFloat((this._totalBasket * (1-this.discountApplied)).toFixed(2)); 
  }
  
  public notification: string = '';    // Message shown when totalBasket >177€
  private basePrice: number = 10;
  public discountApplied: number = 0;
  
  ngOnInit(){
    this.checkNotification();
  }

  ngDoCheck(){        
    // console.log("Entering on the doCheck");
  }

  checkNotification(){        
    let limitPrice = 177;

    if (this.totalBasket > limitPrice)
      this.notification = `You have reached ${limitPrice} €!`;
    else
      this.notification = '';

    // console.log("Checking DOM of the component");
  }  

  addProduct(){
    this.productsAmount++;
    this.totalBasket = this._totalBasket + this.basePrice;

    console.log(`New product added. Total price ${this.totalBasket}€`);
    this.checkNotification();    
  }

  add5Products(){    
    this.productsAmount +=5;
    this.totalBasket = this._totalBasket + this.basePrice*5;

    console.log(`New 5 products added. Total price ${this.totalBasket}€`);
    this.checkNotification();    
  }

  applyCoupon(){
    if(this.discountApplied == 0){      
      this.discountApplied = 0.2;
      console.log(`Disscount = ${this.discountApplied}`);
    }
    else{
      this.discountApplied = 0;
      console.log(`Disscount = ${this.discountApplied}`);
    }      
    this.checkNotification();
    console.log(`Total price ${this.totalBasket}€ and ${this.productsAmount} in the basket`);
  }  

  deleteProduct(){
    if (this.productsAmount > 0){
      this.productsAmount--;
      this.totalBasket = this._totalBasket - this.basePrice;      
      this.checkNotification();
    }    
    else
      console.log("You have no products on the basket! Imposible to delete more products!")      
  }

  emptyBasket(){
    this.productsAmount = 0;
    this.totalBasket = 0;

    console.log("Empty basket!")      
    this.checkNotification();
  }
  
}
