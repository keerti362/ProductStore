import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { ProductModel } from '../models/product-model';

describe('ProductService', () => {
  let productService: ProductService;
  let httpMock: HttpTestingController;

  const dummyProducts: ProductModel[] = [
    {
      id: 1,
      name: "Phone XL",
      description: "A large phone with one of the best screens.",
      price: 10000
      , color: "Red"
    },
    {
      id: 2,
      name: "Phone mini",
      description: "A great phone with one of the best cameras.",
      price: 10000
      , color: "Red"
    }
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService],
      imports: [HttpClientTestingModule]
    });
    productService = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  it('should get all the products successfully', () => {
    productService.getProductLists().subscribe((data: any) => {
      //  expect(data.length).toBeGreaterThan(0);
      expect(data.length).toBe(2);
      expect(data).toEqual(dummyProducts);
    });
    const req = httpMock.expectOne('http://localhost:8080/products', 'call to api');
    expect(req.request.method).toBe('GET');

    req.flush(dummyProducts);

    // httpMock.verify(); 
  });

  it('should get the product by its id', () => {
    productService.getProductById(1).subscribe((data: any) => {
      expect(data.name).toBe("Phone mini");
    });
    const req = httpMock.expectOne('http://localhost:8080/product/1', 'call to api');
    expect(req.request.method).toBe('GET');
  });

  it('should get the product by searching by its name', () => {
    productService.searchProduct('Phone XL').subscribe((data: any) => {
      expect(data.description).toBe("A large phone with one of the best screens.");
    });
    const req = httpMock.expectOne('http://localhost:8080/productByName/Phone XL', 'call to api');
    expect(req.request.method).toBe('GET');

    // req.flush({
    //   name: 'Phone XL'
    //   });

    // httpMock.verify(); 
  });


});
