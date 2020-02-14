import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product-model';
import  { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items = [];

  constructor(private httpClient : HttpClient) {
   }
  addToCart(product){
   this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  deleteFromCart(){
    this.items.pop();
  }

  clearCart(){
  this.items=[];
  return this.items;
  }
  
  getShippingPrices(){
     return this.httpClient.get('/assets/shipping.json');
   }

}


