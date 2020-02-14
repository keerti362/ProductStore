import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 user : User = new User();
 signInForm: FormGroup;
 submitted = false;

  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    // this.users = this.userService.getUsersList();
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
 
  get f() { return this.signInForm.controls; }

  onSubmit(){
    this.submitted = true;

    if (this.signInForm.invalid) {
      return;
  }

   window.alert("You are successfully logged in !")
   this.router.navigate(['/store']);

  }
}
