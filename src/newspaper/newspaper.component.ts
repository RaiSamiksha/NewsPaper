import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-newspaper',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatCardModule,
    MatChipsModule,
  ],
  templateUrl: './newspaper.component.html',
  styleUrl: './newspaper.component.css'
})
export class NewspaperComponent implements OnInit{

  constructor(private dataservice: DataService){ }

  currentNews='';

  ngOnInit(){
    this.sendData();
  }

   news: string[] = [
    "Mamata Banerjee condemns arrest of Hindu monk in Bangladesh: ‘Will support Centre’s decision",
    "In poll fallout, Shiv Sena (UBT) in Pune wants to go it alone for civic polls; Congress keen to continue as MVA",
    "Pakistan Shaheens and Sri Lanka A game postponed due to political tensions in Islamabad",
  ];
  generateNews() {
    const randomIndex = Math.floor(Math.random() * this.news.length);
    const randomNews = this.news[randomIndex];
    return randomNews;
  }

  sendData(){
    setInterval(()=>{
      let newsPaper = this.generateNews();     
      this.dataservice.setDataObject(newsPaper)
      this.currentNews = newsPaper;
    },5000)
  }
}
