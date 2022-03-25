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
  name!: string;
  price!: any;
  constructor(private _addProducts: AddProductsService) {
  }

  ngOnInit(): void {
  }
  addProduct(id: any, name: any, price: any) {
    console.log(this.id = id.value);
    console.log(this.name = name.value);
    console.log(this.price = price.value)
  }
  saveProduct(id: any, name: any, price: any) {

  }
  fetchProduct(id: any, name: any, price: any) {

  }
}
