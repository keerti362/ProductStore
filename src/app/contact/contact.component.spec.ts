import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() =>{
  TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, FormsModule], //importing ReactiveFormsModule,FormsModule to our testbed lists
    declarations: [ContactComponent]
  });
  fixture = TestBed.createComponent(ContactComponent);
  component = fixture.componentInstance;
  component.ngOnInit(); // manually calling ngOnit lifecycle because angular wont call for us
  });
  
  it('form is invalid when empty', () =>{
  expect(component.contactForm.valid).toBeFalsy();
  });

  it('email field validity', () =>{
  let errors = {};
  let email = component.contactForm.controls['email']; // we grab a reference to the actual field itself from the contactForm.controls property
  expect(email.valid).toBeFalsy(); // checking the field is valid
  errors = email.errors || {};
  expect(errors['required']).toBeTruthy();
  email.setValue("test");
  errors = email.errors || {};
  expect(errors['email']).toBeTruthy();
  });

  it('firstName field validity', () =>{
  let errors = {};
  let firstName = component.contactForm.controls['firstName']; 
  expect(firstName.valid).toBeFalsy();
  errors = firstName.errors || {};
  expect(errors['required']).toBeTruthy();
  });

  it('lastName field validity', () =>{
    let errors = {};
    let lastName = component.contactForm.controls['lastName']; 
    expect(lastName.valid).toBeFalsy();
    errors = lastName.errors || {};
    expect(errors['required']).toBeTruthy();
    });

  it('country field validity', () =>{
      let errors = {};
      let country = component.contactForm.controls['country']; 
      expect(country.valid).toBeFalsy();
      errors = country.errors || {};
      expect(errors['required']).toBeTruthy();
      });

  it('on submitting a form when form is valid', () =>{
   expect(component.contactForm.valid).toBeFalsy();
   component.contactForm.controls['firstName'].setValue("Keerti");
   component.contactForm.controls['lastName'].setValue("Patil");
   component.contactForm.controls['email'].setValue("keerti@gmail.com");
   component.contactForm.controls['country'].setValue("India");
   expect(component.contactForm.valid).toBeTruthy();
   component.onSubmit();
  });

  it('on submitting a  form when form is invalid', () =>{
    expect(component.contactForm.valid).toBeFalsy();
    component.contactForm.controls['firstName'].setValue("Keerti");
    component.contactForm.controls['lastName'].setValue("Patil");
    component.contactForm.controls['email'].setValue("keerti.com");
    component.contactForm.controls['country'].setValue("India");
    expect(component.contactForm.valid).toBeFalsy();
    component.onSubmit();
   });

   it('testing a controls function of a model-driven form'), () =>{
    expect(component.contactForm.valid).toBeFalsy();
    component.contactForm.controls['firstName'].setValue("Keerti");
    component.contactForm.controls['lastName'].setValue("Patil");
    component.contactForm.controls['email'].setValue("keerti@gmail.com");
    component.contactForm.controls['country'].setValue("India");
    expect(component.contactForm.valid).toBeTruthy();
    // component.f();
   }

});
