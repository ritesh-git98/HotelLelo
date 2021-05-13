
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking, User } from './user';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  baseURL='http://ec2-3-108-66-146.ap-south-1.compute.amazonaws.com:8080/';
  constructor(private http: HttpClient) {}

  public loginUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>(
      'https://609b47722b549f00176e3371.mockapi.io/login',
      user
    );
  }
  public registerUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>(
      'https://609b47722b549f00176e3371.mockapi.io/login',
      user
    );
  }
  public getUser(id:any): Observable<any> { //pass user id
    return this.http.get<any>(
      this.baseURL + 'findAllUsers/'+id
    );
  }
  public checkBooking(): Observable<any> { //pass user id
    return this.http.get<any>(
      // this.baseURL + 'findAllRooms'
      'https://jsonplaceholder.typicode.com/todos/1'
    );
  }
  public bookRoom(booking: Booking): Observable<any> {
    return this.http.post<any>(
      'https://609b47722b549f00176e3371.mockapi.io/login',
      booking
    );
  }
  public checkAvailability(): Observable<any> {
    return this.http.get<any>(
      this.baseURL + 'findAllRooms'
    );
  }
  public getWalletAmount(): Observable<any> { //pass user id
    return this.http.get<any>(
      // this.baseURL + 'findAllRooms'
      'https://jsonplaceholder.typicode.com/todos/1'
    );
  }
  public getBookings(): Observable<any> { //admin
    return this.http.get<any>(
      // this.baseURL + 'findAllRooms'
      'https://jsonplaceholder.typicode.com/todos/1'
    );
  }
  public getTodayBookings(): Observable<any> { //admin
    return this.http.get<any>(
      // this.baseURL + 'findAllRooms'
      'https://jsonplaceholder.typicode.com/todos/1'
    );
  }
  public getUpcomingBookings(): Observable<any> { //admin
    return this.http.get<any>(
      // this.baseURL + 'findAllRooms'
      'https://jsonplaceholder.typicode.com/todos/1'
    );
  }
  // /////////////////////////Functions for data sharing
  $shareBookingDetails = new EventEmitter();
  shareBooking(booking:any){
    this.$shareBookingDetails.emit(booking);
  }

}
