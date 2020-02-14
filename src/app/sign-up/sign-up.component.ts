import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

   user: User = new User();

  signUpForm:FormGroup;
  submitted = false;

  constructor(private router: Router,private formBuilder:FormBuilder,private userService : UserService) { }

  ngOnInit() {
 
  this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required]
  });

  }

  get f() { return this.signUpForm.controls; }

  createUser(){
    this.submitted = true;
    if (this.signUpForm.invalid) {
           return;
        }
    this.userService.createUser(this.user)
    .subscribe( data => {
      console.log(data);
    });

    window.alert("You are successfully registered !");
    this.router.navigate(['sign-in']);
  }

 }

  