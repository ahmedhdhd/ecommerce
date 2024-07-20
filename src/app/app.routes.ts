import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

export const routes: Routes = [
    { path: 'first' , component: LoginComponent },
    { path: 'second' , component: NavBarComponent },
];


