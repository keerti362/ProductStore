import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { ProductModel } from '../models/product-model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CartService', () => {
  let cartService: CartService;
  let httpMock: HttpTestingController;
   let product: ProductModel;
  beforeEach(() =>{

    TestBed.configureTestingModule({
     providers:[ CartService ],
     imports:[ HttpClientTestingModule ],
    });
   
    //inject the service
    cartService = TestBed.get(CartService);
    httpMock = TestBed.get(HttpTestingController);
    
  });

  it('should get the data successful', () =>{
    cartService.getShippingPrices().subscribe((data:any) =>{
      expect(data.type).toBe('Overnight');
     
    });
    const req  = httpMock.expectOne('/assets/shipping.json','call to api');
    expect(req.request.method).toBe('GET');

    req.flush({
    type: 'Overnight'
    });

    httpMock.verify();
  });

   it('should add product to the cart', () =>{
    cartService.addToCart(product);
    });

  it('should get the items in the cart', () =>{
    cartService.getItems();
  });

  it('should delete the item from the cart', () =>{
    cartService.deleteFromCart();
  });

  it('should clear the items from the cart', () =>{
    cartService.clearCart();
  });
});
