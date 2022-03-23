import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderServiceService } from '../services/header-service.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit,OnDestroy {

  constructor(private _navbarLink: HeaderServiceService,
    private _backProduct: HeaderServiceService
  ) { }

  ngOnInit(): void {
    this._navbarLink.navbarLink.next(false);
    this._backProduct.backProduct.next(true);
  }
ngOnDestroy(): void {
  this._navbarLink.navbarLink.next(true);
    this._backProduct.backProduct.next(false);
}
}
