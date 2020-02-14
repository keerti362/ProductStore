import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
// import CUSTOM_ELEMENTS_SCHEMA from `@angular/core`;
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { TermsComponent } from './terms/terms.component';
import { ProducttestComponent } from './producttest/producttest.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    // AboutComponent,
    ContactComponent,
    SignInComponent,
    SignUpComponent,
    TermsComponent,
    SearchProductComponent,
    ProducttestComponent
   
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    DataTablesModule,
    AppRoutingModule,
    CommonModule
    // RouterModule.forRoot([
    //   { path:'store', component:ProductListComponent },
    //   { path:'product-deatils/:id',component:ProductDetailsComponent },
    //   { path:'cart',component:CartComponent },
    //   { path:'shipping',component:ShippingComponent },
    //   { path:'',component:AboutComponent },
    //   { path:'contact',component:ContactComponent },
    //   { path:'sign-in',component:SignInComponent },
    //   { path:'sign-up',component:SignUpComponent },
    //   { path:'conditions',component:TermsComponent },
    //   { path:'search-product/:name',component:SearchProductComponent },   
    // ])
    // AppRoutingModule
  ],
  providers: [CartService, ProductService, UserService],
  bootstrap: [AppComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
