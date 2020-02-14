import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm:FormGroup;
  submitted = false;

  constructor(private cartService:CartService , private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name :['',Validators.required],
      address : ['',Validators.required]
    });
  }

  get f() { return this.checkoutForm.controls; }

  onSubmit(){
    this.submitted = true;
    if(this.checkoutForm.invalid){
      return;
    }
    window.alert("Your order has been submitted !");
     this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
  }

  deleteFromCart(){
    this.cartService.deleteFromCart();
    window.alert("Your product has been removed from cart !")
  }

}
