import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NewspaperComponent } from "../newspaper/newspaper.component";
import { UsersComponent } from "../users/users.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [NewspaperComponent, UsersComponent, NgFor]
})
export class MainComponent {

    users = [1, 2, 3];

}
