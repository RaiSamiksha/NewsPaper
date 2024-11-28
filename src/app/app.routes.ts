import { Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewspaperComponent } from '../newspaper/newspaper.component';
import { UsersComponent } from '../users/users.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'', component:AppComponent},
    {path:'main', component:MainComponent},
    {path:'newspaper', component:NewspaperComponent},
    {path:'users', component:UsersComponent}
];
