import { Injectable } from '@angular/core';
import { Product } from 'src/app/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private products: Product[] = [];

  addToCart(product: Product){
    this.products.push(product);
  }

  getItems(){
    return this.products;
  }

  clearItems(){
    this.products = [];
    return this.products;
  }

}
