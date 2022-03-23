import { HeaderServiceService } from './../services/header-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _navbarlink: HeaderServiceService) { }
  
  ngOnInit(): void {
    
  }
  // buttonClick() {
  //   this._navbarlink.navbarLink.next(false)
  //   this._navbarlink.gobackProductButton.next(true);
  // }
  
  // ngOnDestroy(): void {
  //   this._navbarlink.navbarLink.next(true)
  //   this._navbarlink.gobackProductButton.next(false);
  // }
}
