import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/shared/models/hotel';
import { RoomSearchRequest } from 'src/app/shared/models/room-search-request';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getRoomsByHotelId(hotelId:any) {
    return this.http.get(`${this.apiUrl}/hotels/${hotelId}/rooms`)
  }


  checkRoom(hotelId:any,param:any) :Observable<Room[]> {
    return this.http.post<Room[]>(`${this.apiUrl}/hotels/${hotelId}/rooms`,param)
  }
}
