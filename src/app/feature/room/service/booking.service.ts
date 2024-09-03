import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookingRequest } from 'src/app/shared/models/booking-request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl = environment.apiUrl

  private bookingSource: BehaviorSubject<any>;
  booking$: Observable<any>

  constructor(private http: HttpClient) {
    this.bookingSource = new BehaviorSubject<any>(null)
    this.booking$ = this.bookingSource.asObservable();
  }

  getBookingValue(){
    return this.bookingSource.value
  }

  setBooking(booking:any){
    this.bookingSource.next(booking)
  }

  getUserFlights(userId:any){
    let params = new HttpParams().set("userId",userId);

    return this.http.get<any>(this.apiUrl + "flight/booking",{params})
  }

  bookingFlight(booking:any){
    return this.http.post<any>(this.apiUrl + "flight/booking",booking)
  }

  bookRoom(bookingRequest: BookingRequest):Observable<any>{
    return this.http.post<BookingRequest>(this.apiUrl + "room/booking",bookingRequest)
  }


}
