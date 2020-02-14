import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingComponent } from './shipping.component';
import { CartService } from '../services/cart.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShippingComponent', () => {
  let component: ShippingComponent;
  let fixture: ComponentFixture<ShippingComponent>;
  let cartService: CartService;
  let httpMock: HttpTestingController;

  beforeEach(() =>{
  TestBed.configureTestingModule({
  declarations: [ ShippingComponent ],
  providers: [CartService],
  imports: [HttpClientTestingModule]
  });

  fixture = TestBed.createComponent(ShippingComponent);
  fixture.detectChanges();
  component = fixture.componentInstance;

  cartService = TestBed.get(CartService);
  httpMock = TestBed.get(HttpTestingController);
  component.ngOnInit();
  });

  it('ngOnInit()',() =>{
  fixture.detectChanges();
  cartService.getShippingPrices().subscribe(shippingPrice =>{
  expect(shippingPrice).toBe(3);
  });
  });

  

  
});
