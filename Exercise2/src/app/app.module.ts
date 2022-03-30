import { GallaryItems } from './appModals/gallary';
import { UserdataService } from './services/userdata.service';
import { ProductsDBService } from './services/products-db.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { GallaryImageComponent } from './gallary/gallary-image/gallary-image.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  PB_DIRECTION, POSITION, SPINNER,
} from "ngx-ui-loader";
import { trigger, state, style, animate, transition } from '@angular/animations';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  fgsColor: '#0d6efd',
  fgsPosition: 'center-center',
  blur: 1,
  fgsSize: 100,
  minTime: 50,
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  // bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.squareJellyBox, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 7, // progress bar thickness
  pbColor: '#0d6efd',

};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GallaryComponent,
    ProductsComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    ProductInfoComponent,
    GallaryImageComponent,
    AddProductComponent,
    SpinnerComponent,
    UserdetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
  ],
  providers: [
    ProductsDBService,
    UserdataService,
    GallaryItems
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
