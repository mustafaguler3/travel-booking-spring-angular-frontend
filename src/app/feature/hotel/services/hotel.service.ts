import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../../../shared/models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  apiUrl = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  getHotels(){
    return this.http.get<Hotel[]>(this.apiUrl + "/hotels");
  }
}
