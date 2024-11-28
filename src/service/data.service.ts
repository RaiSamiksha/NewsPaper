import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  subject = new Subject();

  setDataObject(obj: any) { 
    this.subject.next(obj); 
  }
  
  getDataObject(): Observable<any> {
    return this.subject.asObservable(); 
  }
}
