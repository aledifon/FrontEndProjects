import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { Cinema } from './components/cinema/cinema';
import { User } from './components/user/user';
import { Sellings } from './components/sellings/sellings';
import { Basket } from './components/basket/basket';
import { BasketSignals } from './components/basket-signals/basket-signals';
import { ParentComponent } from './components/parent/parent.component';
import { Film } from './components/film/film';
import { UsersHTTPComponent } from './components/users-http/users-http.component';
import { Page404Component } from './components/page404/page404.component';

export const routes: Routes = [
    {path: "", component: ProductComponent},
    {path: "init", component: ProductComponent},
    {path: "components", component: ProductComponent},
    {path: "lifeCycle", component: Film},
    {path: "templates", component: User},
    {path: "directives", component: Sellings},    
    {path: "models", component: Cinema},
    {path: "basket", component: Basket},
    {path: "signals", component: BasketSignals},
    {path: "comunication", component: ParentComponent},
    {path: "services/:id", component: UsersHTTPComponent},  // Sending params on the route
    {path: "services", component: UsersHTTPComponent},
    {path: "**", component: Page404Component}           // Default route in case of typing 
                                                        // an invalid route
];
