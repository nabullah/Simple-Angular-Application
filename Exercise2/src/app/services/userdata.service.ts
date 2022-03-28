import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  userData: any = []
  localItem: any;
  getLocalStorage: any
  data = new BehaviorSubject<any>(this.userData);

  constructor() {

  }
  saveUserData(info: any) {
    this.userData.push(info)
    this.localItem = localStorage.setItem('user', JSON.stringify(this.userData));
    // this.userData.push(localItem);
    console.log(this.localItem);
  }
  // getUserData() {
  //   console.log(this.userData.value)
  //   this.getLocalStorage = JSON.parse(localStorage.getItem("user") || '{}')
  //   console.log(this.getLocalStorage)
  // }

}
