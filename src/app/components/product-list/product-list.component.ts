import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products!: Observable<Product[]>;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.products = this.http.get<Product[]>('/assets/products.json');
  }

  share() {
    window.alert('The product has been shared');
  }

  onNotify() {
    window.alert('You will be alerted when the product goes to sale');
  }
}
