import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators, ControlContainer, FormGroup, FormControl } from '@angular/forms';
import { Booking } from 'src/app/user';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  Booking = new Booking();

  title: string;
  roomType = ['Deluxe', 'Super Deluxe',
    'Super Deluxe AC', 'Suite'];
  constructor() { }
  // constructor(private service: BookingService) { }
  ngOnInit(): void {
    this.title = "Book your stay"
  }
  checkAvailable() {
    // this.service.loginUserFromRemote(this.).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.router.navigate(['/loginsuccess']);
    //   },
    //   (error) => {
    //     console.log('exception occured');
    //     this.msg = "Bad Credentials, please enter valid emailId and password";
    //   }
    // );
  }

  get diagnostic() { return JSON.stringify(this.Booking); }

}
