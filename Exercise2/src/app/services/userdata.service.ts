
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  userData: any = [];
  localItem: any;
  username = new Subject<any>();
  data = new BehaviorSubject<any>(this.userData);
  fullName = new Subject<any>();
  constructor() {
    // this.userData = JSON.parse(localStorage.getItem('user') || '{}')
  }

  saveUserData(info: any) {
    this.userData.push(info)
    localStorage.setItem('user', JSON.stringify(this.userData))
  }

}
