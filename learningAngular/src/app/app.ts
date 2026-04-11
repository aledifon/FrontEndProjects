import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',                       /* Component selector (HTML tag) */
  imports: [ProductComponent],  /* Standalone dependencies for this component */
  templateUrl: './app.html',                  /* Component template (view) */
  styleUrl: './app.scss'                      /* Component scoped styles */
})
export class App {
  protected readonly title = signal('1st project with Angular');
}
