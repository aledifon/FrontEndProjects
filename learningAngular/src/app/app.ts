import { Component, signal } from '@angular/core';
// import { Sellings } from "./components/sellings/sellings";
// import { RouterOutlet } from '@angular/router';
// import { ProductComponent } from './product/product.component';
// import { User } from './user/user';
import { config } from './models/config'; 
// import { Cinema } from './components/cinema/cinema';
// import { Basket } from './components/basket/basket';
import { BasketSignals } from './components/basket-signals/basket-signals';


@Component({
  selector: 'app-root',                       /* Component selector (HTML tag) */
  imports: [BasketSignals],  /* Standalone dependencies for this component */
  templateUrl: './app.html',                  /* Component template (view) */
  styleUrl: './app.scss'                      /* Component scoped styles */
})
export class App {
  protected readonly title = signal('1st project with Angular');

  title2 = config.title;
  description = config.description;
}
