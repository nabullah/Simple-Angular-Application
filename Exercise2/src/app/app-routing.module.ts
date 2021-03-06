import { AuthGuard } from './services/auth.guard';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AddProductComponent } from './add-product/add-product.component';
import { GallaryImageComponent } from './gallary/gallary-image/gallary-image.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'gallary', component: GallaryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', canActivate: [AuthGuard], component: LoginComponent },
  { path: 'signup', canActivate: [AuthGuard], component: SignupComponent },
  { path: 'product-info', component: ProductInfoComponent },
  { path: 'gallary-image/:id', component: GallaryImageComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'userdetails', component: UserdetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
