import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  product:ProductModel;
  getProductLists(){
    return this.httpClient.get('http://localhost:8080/products');
   }

   getProductById(id:number){
     return this.httpClient.get<ProductModel>('http://localhost:8080/product/'+id);
   }

   searchProduct(name:String){
     return this.httpClient.get<ProductModel>('http://localhost:8080/productByName/'+name);
   }
}
