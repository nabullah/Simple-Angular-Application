import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductsService {
  addProducts = [{
    slno: '',
    productName: '',
    productPrice: '',
  }
  ]

  constructor() { }
}
