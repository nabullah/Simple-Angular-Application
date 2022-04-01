
import { HeaderServiceService } from './../services/header-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any = []

  constructor(private _navbarlink: HeaderServiceService,

  ) { }

  ngOnInit(): void {
    // console.log(this.productArray.productArray)
    // this.productList = this._productArray.productArray;
    // console.log(this.productList)
  }
}
