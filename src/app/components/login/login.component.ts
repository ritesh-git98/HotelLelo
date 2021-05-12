import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(private service: BookingService, private router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this.service.loginUserFromRemote(this.user).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/loginsuccess']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = "Bad Credentials, please enter valid emailId and password";
      }
    );
  }
}
