import { ProductsDBService } from './../services/products-db.service';
import { AddProductsService } from './../services/add-products.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  // Fontawe some
  delIcon = faTrash
  editIcon = faEdit;
  // _____________________________
  id !: any;
  name!: any;
  price!: any;
  productList: any = []
  localItem: any;
  toggle: boolean = true;
  fetching: boolean = false
  product: any = '';
  editMode: boolean = false;
  editIndex: any;
  alertBoxSuccess: boolean = false;

  @ViewChild('id') productId!: ElementRef;
  @ViewChild('name') productName!: ElementRef
  @ViewChild('price') productPrice!: ElementRef

  constructor(private _addProducts: AddProductsService,
    private _products: ProductsDBService) {
  }
  ngOnInit(): void {
    this.fetchProduct();
  }

  // Add Product and send values to DB 
  addProduct(id: any, name: any, price: any) {
    if (this.editMode == true) {
      // Edit Mode
      this.productList[this.editIndex] = {
        id: id.value,
        name: name.value,
        price: price.value,
      }
      this.editMode = false

    } else {
      this.productList.push({
        id: id.value,
        name: name.value,
        price: price.value,
      })
    }
    this.fetching = true
    this.saveProduct();
    this.alertBoxSuccess = true;
    this.clearInput();
    this.valuesChanged();
    this.fetching = false
    // localStorage.setItem('addProduct', JSON.stringify(this.productList))
  }
  // Delete Product 
  deleteProduct(i: any) {
    this.productList.splice(i, 1);
    this.saveProduct();
    // localStorage.setItem('addProduct', JSON.stringify(this.productList))
  }
  // Send values to Database 
  saveProduct() {
    this._products.saveProduct(this.productList).subscribe((response) => {

    }, err => console.log(err))
  }
  // Fetch Product 
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
  // Edit Mode 
  onEditProduct(index: number) {
    this.editMode = true;
    this.editIndex = index;
    this.productId.nativeElement.value = this.productList[index]?.id
    this.productName.nativeElement.value = this.productList[index]?.name
    this.productPrice.nativeElement.value = this.productList[index]?.price
  }
  // Clear Input field in Add Product 
  clearInput() {
    this.productId.nativeElement.value = null;
    this.productName.nativeElement.value = null;
    this.productPrice.nativeElement.value = null;
  }
  // Values Changed Alert Box
  valuesChanged() {
    setTimeout(() => {
      this.alertBoxSuccess = false
    }, 2000);
  }






}

