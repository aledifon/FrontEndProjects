import { Component } from '@angular/core';
import { signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-basket-signals',
  imports: [],
  templateUrl: './basket-signals.html',
  styleUrl: './basket-signals.scss',
})
export class BasketSignals {

  // Vars
  private readonly basePrice: number = 10;
  
  // Normal signals
  storeName = signal('My Store');
  productsAmount = signal(0);   // Total of products on the basket  
  discountApplied = signal(0);

  // Computed signals
  notification = computed(() => {
    let limitPrice = 177;    

    return (this.totalBasketFinal() > limitPrice) 
      ? `You have reached ${limitPrice} €!`
      : '';    
  });
  totalBasket = computed(() => this.productsAmount() * this.basePrice);
  totalBasketFinal = computed(() => 
    parseFloat((this.totalBasket() * (1-this.discountApplied())).toFixed(2))
  );  
  
  //Constructor
  constructor(){
    // Effect: runs whenever productsAmount signal changes
    // Used for side effects (e.g. logging, not deriving values)
    effect(() => {
      this.showEffectMessage();
    });
  }

  showEffectMessage(){
    console.log(`Products changes detected by effect signal: ${this.productsAmount()} products`);
  }

  addProduct(){
    this.productsAmount.update(current => current + 1);    
    console.log(`New product added. Total price ${this.totalBasketFinal()}€`);    
  }

  add5Products(){    
    this.productsAmount.update(current => current + 5);    
    console.log(`New 5 products added. Total price ${this.totalBasketFinal()}€`);    
  }

  applyCoupon(){
    if(this.discountApplied() == 0){      
      this.discountApplied.set(0.2);
      console.log(`Disscount = ${this.discountApplied()}`);
    }
    else{
      this.discountApplied.set(0);
      console.log(`Disscount = ${this.discountApplied()}`);
    }          
    console.log(`Total price ${this.totalBasketFinal()}€ and ${this.productsAmount()} in the basket`);
  }  

  deleteProduct(){
    if (this.productsAmount() > 0){
      this.productsAmount.update(current => current - 1);                  
    }    
    else
      console.log("You have no products on the basket! Imposible to delete more products!")      
  }

  emptyBasket(){
    this.productsAmount.set(0);
    console.log("Empty basket!")          
  }

/*
  public counter = signal(20);
  // Normal signal
  public increment = signal(1);
  // Computed signal (calculated from another signal)
  public counterX3 = computed(() => this.counter() * 3);
  

  // Ways to update the value of a signal
  increase(){
    // this.counter.set(this.counter() + 1);

    // Like set method but getting the current value as input on the lambda expression.
    this.counter.update( currentCounter => currentCounter + this.increment());
  }

  ngOnInit(){
    console.log("The app has loaded");
  }

  ngDoCheck(){
    console.log("A change on the component has been detected");    
  }
*/
}
