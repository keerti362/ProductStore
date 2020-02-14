import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { ProductModel } from '../models/product-model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let productService: ProductService;
  let cartService: CartService;
  let httpMock: HttpTestingController;
  let product;

  const products: ProductModel = {
    id: 1,
    name: "Phone XL",
    description: "A large phone with one of the best screens.",
    price: 10000,
    color: "White"
  }
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 1,
              },

            },
          },
        }, CartService, ProductService
      ],
      declarations: [ProductDetailsComponent],
      imports: [HttpClientTestingModule],
    });

    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    cartService = TestBed.get(CartService);
    productService = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should not get the product-details before ngOnInit', () => {
    // spyOn(productService, 'getProductById');
    productService.getProductById(1).subscribe(product => {
      expect(product.description).toBe('');
    });
  });

  it('should get the product-details after ngOnInit', async(() => {
    fixture.detectChanges();
    productService.getProductById(1).subscribe(data => {
    expect(data.description).toBe('A large phone with one of the best screens.');
    });
   
  }));

  it('should add the product to the cart successfully', () =>{
    spyOn(cartService, 'addToCart');
    component.addToCart(products);
    expect(cartService.addToCart).toHaveBeenCalled();
  });

});
