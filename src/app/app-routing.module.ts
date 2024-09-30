import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/security/login/login.component';
import { RegisterComponent } from './components/security/login/register/register.component';
import { ProductListComponent } from './components/product-section/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-section/product-create/product-create.component';
import { ProductDetailComponent } from './components/product-section/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-section/product-edit/product-edit.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AuthGuard } from './guard/auth.guard'; // Import the AuthGuard

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},           // Home page route
  { path: 'products', component: ProductListComponent , canActivate: [AuthGuard]},
  { path: 'products/create', component: ProductCreateComponent , canActivate: [AuthGuard]},
  { path: 'products/:id', component: ProductDetailComponent , canActivate: [AuthGuard]},
  { path: 'products/edit/:id', component: ProductEditComponent , canActivate: [AuthGuard]},
  { path: 'cart', component: CartComponent , canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent , canActivate: [AuthGuard]},
  { path: 'help', component: ContactusComponent , canActivate: [AuthGuard]},
  { path: 'orders', component: OrdersComponent , canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard]},

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // redirect to login if path not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
