import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { ProductComponent } from './product/product.component';
import { User } from './user/user';

@Component({
  selector: 'app-root',                       /* Component selector (HTML tag) */
  imports: [User],  /* Standalone dependencies for this component */
  templateUrl: './app.html',                  /* Component template (view) */
  styleUrl: './app.scss'                      /* Component scoped styles */
})
export class App {
  protected readonly title = signal('1st project with Angular');
}
