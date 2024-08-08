import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../../../shared/models/hotel';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  apiUrl = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  getHotels() : Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + "/hotels");
  }

  
}
