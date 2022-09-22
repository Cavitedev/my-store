import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from 'src/app/models/products';
import { ShippingPrice } from 'src/app/models/shipping';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  private products: Product[] = [];

  addToCart(product: Product) {
    this.products.push(product);
  }

  getItems() {
    return this.products;
  }

  clearItems() {
    this.products = [];
    return this.products;
  }

  getShippingPrices() {
    return this.http.get<ShippingPrice[]>('/assets/shipping.json');
  }
}
