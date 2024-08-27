import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingRequest } from 'src/app/shared/models/booking-request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  bookRoom(bookingRequest: any):Observable<any>{
    return this.http.post<any>(this.apiUrl + "room/booking",bookingRequest)
  }


}
