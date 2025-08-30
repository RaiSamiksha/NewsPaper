import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input() currentNews = '';
  @Input() newsArray: string[] = [];
  users = [
    { name: 'Alice', subscribed: false },
    { name: 'Bob', subscribed: false },
    { name: 'Charlie', subscribed: false }
  ];

  subscribe(user: any) {
    user.subscribed = true;
  }

  unsubscribe(user: any) {
    user.subscribed = false;
  }
}
