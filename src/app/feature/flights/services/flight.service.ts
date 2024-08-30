import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/shared/models/flight';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getFlights():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.apiUrl + "flights");
  }

  getFlightImage(flightImage:any){
    return "http://localhost:8080/images/"+flightImage
  }
}
