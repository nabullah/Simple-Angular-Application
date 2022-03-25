import { ProductsDBService } from './../services/products-db.service';
import { AddProductsService } from './../services/add-products.service';
import { Component, OnInit } from '@angular/core';
import { } from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  delIcon = faTrash
  id !: any;
  name!: any;
  price!: any;
  productList: any = []
  localItem: any;
  toggle: boolean = true;
  fetching: boolean = false
  product: any = ''
  constructor(private _addProducts: AddProductsService,
    private _products: ProductsDBService) {
  }
  ngOnInit(): void {
    // this.localItem = localStorage.getItem('addProduct')
    // if (this.localItem === null) {
    //   this.productList = []
    // } else {
    //   this.productList = JSON.parse(this.localItem)
    // }
    // console.log(this.productList)
    this.fetchProduct();
  }
  addProduct(id: any, name: any, price: any) {
    this.productList.push({
      id: id.value,
      name: name.value,
      price: price.value,
    })
    // localStorage.setItem('addProduct', JSON.stringify(this.productList))
  }
  deleteProduct(i: any) {
    this.productList.splice(i, 1);
    this.saveProduct();
    // localStorage.setItem('addProduct', JSON.stringify(this.productList))
  }
  saveProduct() {
    this._products.saveProduct(this.productList).subscribe(response => {

    }, err => console.log(err))
  }
  fetchProduct() {
    this.fetching = true;
    this._products.fetchProduct().subscribe(response => {
      // console.log(response)
      const data = JSON.stringify(response);
      this.productList = JSON.parse(data);
      this.fetching = false;
    }, err => console.log(err))

    this._products.getTitle().subscribe(response => {
      this.product = response;
    }, err => console.log(err))
  }
}
