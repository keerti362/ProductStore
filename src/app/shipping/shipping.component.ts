import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts: any;

  constructor(private cartService:CartService) { }

  ngOnInit() {

    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
