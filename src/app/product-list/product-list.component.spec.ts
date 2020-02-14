import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product-model';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;
  let httpMock: HttpTestingController;

  const products: ProductModel[] = [
    {
      id: 1,
      name: "Phone XL",
      description: "A large phone with one of the best screens.",
      price: 10000,
      color: "White"
    },
    {
      id: 2,
      name: "Phone mini",
      description: "A large phone with one of the best cameras.",
      price: 20000,
      color: "Red"
    }
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ProductListComponent],
      providers: [ProductService]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
    component.ngOnInit();

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should not get the productLists before ngOnInit', () => {
    productService.getProductLists().subscribe(productList => {
      expect(productList).toBe(0);
    });
  });

  it('should get the productLists after ngOnInit', async () => {
    fixture.detectChanges();
    productService.getProductLists().subscribe(productList => {
      // expect(productList).toBe(2);
      expect(productList).toEqual(products);
    });
  });

  it('share()', async () => {
    component.share();  
  });

});


