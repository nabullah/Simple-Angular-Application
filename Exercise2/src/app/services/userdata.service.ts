import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  userData: any = []
  localItem: any;
  data = new BehaviorSubject<any>(this.userData);

  constructor() {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}')
  }
  saveUserData(info: any) {
    this.userData.push(info)
    localStorage.setItem('user', JSON.stringify(this.userData))
  }


}
