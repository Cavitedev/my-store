import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShippingPrice } from 'src/app/models/shipping';

import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private cartService:CartService) { }

  shippingCosts!: Observable<ShippingPrice[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
