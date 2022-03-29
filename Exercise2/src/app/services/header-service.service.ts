import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {
  // gobackProductButton = new BehaviorSubject(false);
  navbarLink = new BehaviorSubject(true);
  backGallary = new BehaviorSubject(false);
  backProduct = new BehaviorSubject(false);
  loginButton = new BehaviorSubject(true)
  logoutButton = new BehaviorSubject(false)
  loginAlert = new BehaviorSubject(false)
  username = new Subject<any>();
  constructor() {

  }


}
