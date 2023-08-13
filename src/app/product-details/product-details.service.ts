import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../products/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}

  getProductDetails$(id: string) {
    return this.http.get<ProductModel>(`https://dummyjson.com/products/${id}`);
  }
}
