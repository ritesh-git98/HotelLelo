import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BookingComponent } from './components/booking/booking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddMoneyComponent } from './components/add-money/add-money.component';
import { HomeComponent } from './components/home/home.component';
import { RoomAvailabeComponent } from './components/room-availabe/room-availabe.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AboutComponent,
    BookingComponent,
    ProfileComponent,
    AddMoneyComponent,
    HomeComponent,
    RoomAvailabeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
