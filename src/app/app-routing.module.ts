import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TermsComponent } from './terms/terms.component';
import { SearchProductComponent } from './search-product/search-product.component';

import { ProductListComponent } from './product-list/product-list.component';
// import { ProducttestComponent } from './producttest/producttest.component';
// import { AppComponent } from './app.component';
// import { AppModule } from './app.module';
// import CUSTOM_ELEMENTS_SCHEMA from `@angular/core`;



export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'store', component: ProductListComponent },
  { path: 'product-deatils/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'conditions', component: TermsComponent },
  { path: 'search-product/:name', component: SearchProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    // ProductListComponent,
    // TopBarComponent,
    // ProductDetailsComponent,
    // CartComponent,
    // ShippingComponent,
    AboutComponent
    // ContactComponent,
    // SignInComponent,
    // SignUpComponent,
    // TermsComponent,
    // SearchProductComponent,
    // ProducttestComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule { }
