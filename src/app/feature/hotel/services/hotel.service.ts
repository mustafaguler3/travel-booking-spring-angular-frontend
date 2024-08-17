import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel, Review } from '../../../shared/models/hotel';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  apiUrl = "http://localhost:8080/api"

  constructor(private http: HttpClient,
    private authService: AuthService
  ) { }

  addReview(review:any){
    return this.http.post(`${this.apiUrl}/hotels/${review.hotelId}/addReview`,review)
  }

  getHotels() : Observable<Hotel[]>{
    return this.http.get<Hotel[]>(this.apiUrl + "/hotels");
  }
  
  getReviews(hotelId: any):Observable<Review[]>{
    return this.http.get<Review[]>(`${this.apiUrl}/hotels/${hotelId}/reviews`)
  }

  getHotel(hotelId: any):Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/hotels/${hotelId}`)
  }


  getAmenityImage(image:any): any{
    return `http://localhost:8080/images${image}`;
  }

  getHotelImageUrl(hotelPicture: any): any {
    return `http://localhost:8080/uploads/hotels/${hotelPicture}`;
  }
}
