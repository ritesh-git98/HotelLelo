
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking, User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
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
  public checkAvailability(type: Booking): Observable<any> {
    return this.http.post<any>(
      'https://609b47722b549f00176e3371.mockapi.io/login',
      Booking
    );
  }
}
