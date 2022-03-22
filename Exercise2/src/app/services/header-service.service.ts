import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {
  gobackProductButton = new BehaviorSubject(false);
  navbarLink = new BehaviorSubject(true);
  constructor() { }
}
