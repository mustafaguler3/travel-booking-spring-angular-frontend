import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel, Review } from '../../../shared/models/hotel';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment.prod';
import { Pagination } from 'src/app/shared/models/pagination';
import { HotelSearchParams } from '../../../shared/models/hotel-search-params';

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

  getHotels(pageNumber:any,pageSize:any) : Observable<Pagination<Hotel[]>>{
    let params = new HttpParams()
    
    if (pageNumber != null && pageSize != null) {
      params = params.set("pageNumber", pageNumber);
      params = params.set("pageSize", pageSize.toString());
    }
    console.log("Params "+params.get("pageNumber"))
    console.log("Params "+params.get("pageSize"))

    return this.http.get<Pagination<Hotel[]>>(this.apiUrl + "/hotels",{params});
  }
  
  getReviews(hotelId: any):Observable<Review[]>{
    return this.http.get<Review[]>(`${this.apiUrl}/hotels/${hotelId}/reviews`)
  }

  getHotel(hotelId: any):Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/hotels/${hotelId}`)
  }

  searchHotels(params: HotelSearchParams) : Observable<Hotel[]>{
    return this.http.post<Hotel[]>(this.apiUrl + "/hotels/search-hotels",params)
  }

  getRoomImage(image:any): any{
    return `http://localhost:8080/images/rooms/${image}`;
  }

  getAmenityImage(image:any): any{
    return `http://localhost:8080/images${image}`;
  }

  getHotelImageUrl(hotelPicture: any): any {
    return `http://localhost:8080/uploads/hotels/${hotelPicture}`;
  }
}
