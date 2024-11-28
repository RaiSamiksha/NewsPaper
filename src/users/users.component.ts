import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatCardModule,
    MatChipsModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  constructor(private dataservice:DataService){}

  newsPaperData = ''; 
  subscription:any = Subscription;


  ngOnInit(){
    this.getData();
  }

  getData() {
      this.subscription = this.dataservice.getDataObject().subscribe(res => {
        if (res !== undefined) {
          console.log(res);
          this.newsPaperData = res;
        }
      }) 
}

unsubscribe(){
  this.subscription.unsubscribe();
  console.log("unsubscribed!!");
}
}
