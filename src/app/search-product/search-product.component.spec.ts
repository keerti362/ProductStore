import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductComponent } from './search-product.component';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductModel } from '../models/product-model';
import { ActivatedRoute } from '@angular/router';

describe('SearchProductComponent', () => {
  let component: SearchProductComponent;
  let fixture: ComponentFixture<SearchProductComponent>;
  let productService: ProductService;
  let cartService: CartService;
  let httpMock: HttpTestingController;
  // let product: ProductModel;

  const products: ProductModel = {
    id: 1,
    name: "Phone XL",
    description: "A large phone with one of the best screens.",
    price: 10000
    ,color:"Red"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchProductComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'Phone XL',
              },
            },
          },
        }, ProductService, CartService
      ]
    });

    fixture = TestBed.createComponent(SearchProductComponent);
    component = fixture.componentInstance;
    cartService = TestBed.get(CartService);
    productService = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should not get the product details by its name before ngOnInit', () => {
    productService.searchProduct('Phone XL').subscribe(data => {
      expect(data.description).toBe('');
    });
  });

  it('should get the product details by its name after ngOnInit', async(() => {
    fixture.detectChanges();
    productService.searchProduct('Phone XL').subscribe(data => {
      expect(data.description).toBe('A large phone with one of the best screens.');
      expect(data).toEqual(products);
    });
  }));

  it('should add the product to the cart successfully', () => {
    spyOn(cartService, 'addToCart');
    component.addToCart(products);
    expect(cartService.addToCart).toHaveBeenCalled();
  });

});

