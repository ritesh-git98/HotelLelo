import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { BookingComponent } from './components/booking/booking.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyBookingComponent } from './components/my-booking/my-booking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddMoneyComponent } from './components/add-money/add-money.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'book', component: BookingComponent },
  { path: 'addMoney', component: AddMoneyComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'myBooking', component: MyBookingComponent },
  { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,RegisterComponent,LoginComponent, AboutComponent,BookingComponent,AddMoneyComponent,MyBookingComponent,ProfileComponent,CheckoutComponent]