import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { routes } from '../app-routing.module';
import { RouterTestingModule } from "@angular/router/testing";
import { SignInComponent } from './sign-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule.withRoutes(routes)],
    });
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    router = TestBed.get(Router); // grab a reference to injected Router
    location = TestBed.get(Location); // grab a reference to injected Location

    router.initialNavigation(); // this sets up the location change listener  and performs the initial navigation
  });

  // it('signin form is invalid when is submitted empty', () =>{
  // expect(component.signInForm.valid).toBeFalsy();
  // });

  it('form is invalid when empty', () => {
    expect(component.signInForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    
  // let email = component.signInForm.controls['email'];  // we grab a reference to the actual field itself from the contactForm.controls property
   let email = component.signInForm.controls['email']
  expect(email.valid).toBeFalsy();
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
    email.setValue('keerti');
    errors = email.errors || {};
    expect(errors['email']).toBeTruthy();
  });

  it('password field validity', () => {
    let errors = {};
    let password = component.signInForm.controls['password']; // we grab a reference to the actual field itself from the contactForm.controls property
    expect(password.valid).toBeFalsy(); // checking the field is valid
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
    password.setValue("test");
    errors = password.errors || {};
    expect(errors['minLength(6)']).toBeTruthy();
  });

  it('on submitting a contact form when form is valid', () => {
    expect(component.signInForm.valid).toBeFalsy();
    component.signInForm.controls['email'].setValue("keerti@gmail.com");
    component.signInForm.controls['password'].setValue("123456");
    expect(component.signInForm.valid).toBeTruthy();
    component.onSubmit();
  });

  it('on submitting a contact form when form is invalid', () => {
    expect(component.signInForm.valid).toBeFalsy();
    component.signInForm.controls['email'].setValue("keerti@gmail.com");
    component.signInForm.controls['password'].setValue("1256");
    expect(component.signInForm.valid).toBeFalsy();
    component.onSubmit();
  });

  it('testing a controls function of a model-driven form', () => {
    expect(component.signInForm.valid).toBeFalsy();
    component.signInForm.controls['email'].setValue("keerti@gmail.com");
    component.signInForm.controls['password'].setValue("123456");
    expect(component.signInForm.valid).toBeTruthy();
    //  component.f();
  });



});

