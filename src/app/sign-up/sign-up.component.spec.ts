import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let location: Location;
  let router: Router;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule.withRoutes(routes)],
    });

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    component.ngOnInit();

    router = TestBed.get(Router); // grab a reference to injected Router
    location = TestBed.get(Location); // grab a reference to injected Location

    router.initialNavigation(); // this sets up the location change listener  and performs the initial navigation
  });

  it('form is invalid when empty', () => {
    expect(component.signUpForm.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let errors = {};
    let name = component.signUpForm.controls['name']; // we grab a reference to the actual field itself from the contactForm.controls property
    expect(name.valid).toBeFalsy(); // checking the field is valid
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.signUpForm.controls['email']; // we grab a reference to the actual field itself from the contactForm.controls property
    expect(email.valid).toBeFalsy(); // checking the field is valid
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['email']).toBeTruthy();
  });

  it('password field validity', () => {
    let errors = {};
    // let password = component.signUpForm.controls['password']; // we grab a reference to the actual field itself from the contactForm.controls property
    let password = component.signUpForm.controls['password'];
    expect(password.valid).toBeFalsy(); // checking the field is valid
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
    password.setValue("test");
    errors = password.errors || {};
    expect(errors['minLength(6)']).toBeTruthy();
  });

  it('on submitting a form when form is valid', () =>{
    expect(component.signUpForm.valid).toBeFalsy();
    component.signUpForm.controls['name'].setValue("Keerti");
    component.signUpForm.controls['email'].setValue("keerti@gmail.com");
    component.signUpForm.controls['password'].setValue("123456");
    expect(component.signUpForm.valid).toBeTruthy();
     component.createUser();
   });

   it('on submitting a form when form is invalid', () =>{
    expect(component.signUpForm.valid).toBeFalsy();
    component.signUpForm.controls['name'].setValue("Keerti");
    component.signUpForm.controls['email'].setValue("keertigmail.com");
    component.signUpForm.controls['password'].setValue("1456");
    expect(component.signUpForm.valid).toBeFalsy();
     component.createUser();
   });

  it('testing a controls function of a model-driven form', () =>{
    expect(component.signUpForm.valid).toBeFalsy();
    component.signUpForm.controls['name'].setValue("Keerti");
    component.signUpForm.controls['email'].setValue("keerti@gmail.com");
    component.signUpForm.controls['password'].setValue("123456");
    expect(component.signUpForm.valid).toBeTruthy();
    // component.f();
   });

});
