import { Component, OnInit } from '@angular/core';
import { NewsComponent } from '../component/news/news.component';
import { UsersComponent } from '../component/users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewsComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newsArray = [
    'Breaking: Market hits new high!',
    'Weather: Sunny with a chance of rain.',
    'Sports: Local team wins championship.',
    'Tech: New smartphone released today.',
    'Health: Tips for a balanced diet.'
  ];
  currentNewsIndex = 0;
  currentNews = this.newsArray[0];

   ngOnInit() {
    setInterval(() => {
      this.currentNewsIndex = (this.currentNewsIndex + 1) ;
      console.log(this.currentNewsIndex);
      if(this.currentNewsIndex > 4){
        this.currentNewsIndex = 0;
      }
      this.currentNews = this.newsArray[this.currentNewsIndex];
    }, 5000);
  }
}
