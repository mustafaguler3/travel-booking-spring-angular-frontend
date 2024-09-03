import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/shared/models/flight';
import { environment } from 'src/environments/environment';
import { Pagination } from '../../../shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  bookingFlight(booking:any){
    return this.http.post<any>(this.apiUrl + "flight/booking",booking)
  }

  getFlight(flightId:any){
    
    return this.http.get<Flight>(this.apiUrl + "flights/" + flightId)
  }

  getFlights(pageNumber:any,pageSize:any):Observable<Pagination<Flight[]>>{
    let params = new HttpParams()
    
    if (pageNumber != null && pageSize != null) {
      params = params.set("pageNumber", pageNumber);
      params = params.set("pageSize", pageSize.toString());
    }
    console.log("Params "+params.get("pageNumber"))
    console.log("Params "+params.get("pageSize"))
    return this.http.get<Pagination<Flight[]>>(this.apiUrl + "flights",{params});
  }

  getFlightImage(flightImage:any){
    return "http://localhost:8080/images/"+flightImage
  }

  
  calculatePrice(flight:Flight){
    const basePrice = 100;
    const tax = basePrice * 0.10;
    const fee = basePrice * 0.20
    
    const totalPrice = basePrice + tax + fee;
    
    flight.originalPrice = totalPrice;

    return totalPrice;
  }

}
