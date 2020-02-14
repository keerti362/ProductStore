import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product-model';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

   id;
   product: ProductModel;

  constructor(private route: ActivatedRoute, private productService: ProductService,private cartService:CartService) { 
  }

  ngOnInit() {
       this.id = this.route.snapshot.paramMap.get('id');
       this.productService.getProductById(this.id).subscribe(res =>this.product = res);
  }
  
  addToCart(product) {
    window.alert("Product has been added to the cart !");
    this.cartService.addToCart(product);
  }
}
