import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsDBService {
  url = 'https://exercise-2-9b60b-default-rtdb.firebaseio.com/products.json';
  constructor(private http: HttpClient) { }
  saveProduct(products: any[]) {
    // return this.http.post(this.url, products)
    return this.http.put(this.url, products)
  }
  fetchProduct() {
    return this.http.get(this.url);
  }
  getTitle(): Observable<any> {
    return this.http.get('https://exercise-2-9b60b-default-rtdb.firebaseio.com/dataTitle.json');
  }

}
