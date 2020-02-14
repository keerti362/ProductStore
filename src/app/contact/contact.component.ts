import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
 
    this.contactForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        country: ['', Validators.required],
        subject: [''],
    });
  
    }

    get f() { 
      return this.contactForm.controls;
     }

    onSubmit(){
      this.submitted = true;

    if (this.contactForm.invalid) {
      return;
      }

    window.alert("Your querry has been submitted !");
    this.contactForm.reset();
    }
}
