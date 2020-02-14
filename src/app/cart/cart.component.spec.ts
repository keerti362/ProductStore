import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;
  let httpMock: HttpTestingController;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule], //importing ReactiveFormsModule,FormsModule to our testbed lists
      declarations: [CartComponent]
    });
    fixture = TestBed.createComponent(CartComponent);
    cartService = TestBed.get(CartService);
    httpMock = TestBed.get(HttpTestingController);
    component = fixture.componentInstance;
    component.ngOnInit(); // manually calling ngOnit lifecycle because angular wont call for us
    });

    it('form is invalid when empty', () =>{
     expect(component.checkoutForm.valid).toBeFalsy();
      });

    it('name field validity', () =>{
      let errors = {};
      let name = component.checkoutForm.controls['name']; 
      expect(name.valid).toBeFalsy();
      errors = name.errors || {};
      expect(errors['required']).toBeTruthy();
      });
    
    it('address field validity', () =>{
        let errors = {};
        let address = component.checkoutForm.controls['address']; 
        expect(address.valid).toBeFalsy();
        errors = address.errors || {};
        expect(errors['required']).toBeTruthy();
        });

    it('onSubmitting a checkout form when it is valid', () =>{
      expect(component.checkoutForm.valid).toBeFalsy();
      component.checkoutForm.controls['name'].setValue("Keerti");
      component.checkoutForm.controls['address'].setValue("India");
      expect(component.checkoutForm.valid).toEqual(true);
      component.onSubmit();
    });

    it('onSubmitting a checkout form when it is invalid', () =>{
      expect(component.checkoutForm.valid).toBeFalsy();
      component.checkoutForm.controls['name'].setValue("Keerti");
      // component.checkoutForm.controls['address'].setValue("India");
      expect(component.checkoutForm.valid).toBeFalsy();
      component.onSubmit();
    });

    it('delete item from cart', () =>{
       spyOn(cartService,'deleteFromCart');
       component.deleteFromCart();
       expect(cartService.deleteFromCart).toHaveBeenCalled();
    })

    it('testing a controls function of a model-driven form'), () =>{
      expect(component.checkoutForm.valid).toBeFalsy();
      component.checkoutForm.controls['name'].setValue("Keerti");
      component.checkoutForm.controls['address'].setValue("ABCDEFYIOO");
      expect(component.checkoutForm.valid).toBeTruthy();
      // component.f();
     }

    
});
