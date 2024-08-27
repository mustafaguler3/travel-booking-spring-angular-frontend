import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Room } from 'src/app/shared/models/hotel';
import { RoomSearchRequest } from 'src/app/shared/models/room-search-request';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiUrl = environment.apiUrl

  private roomSource: BehaviorSubject<Room>
  public room$: Observable<Room>

  private priceSource: BehaviorSubject<any>;
  public price$: Observable<any>;

  constructor(private http: HttpClient) {
    this.roomSource = new BehaviorSubject<Room | null>(null)
    this.room$ = this.roomSource.asObservable()

    this.priceSource = new BehaviorSubject<any>({
      subtotal: 0,
      discount: 0,
      tax: 0,
      finalTotal: 0
    });
    this.price$ = this.priceSource.asObservable();
  }

  getRoomValue(){
    return this.roomSource.value;
  }
  setRoom(room: Room) {
    this.roomSource.next(room);
  }

  getRoomsByHotelId(hotelId:any) {
    return this.http.get(`${this.apiUrl}/hotels/${hotelId}/rooms`)
  }

  getRoom(roomId:any): Observable<Room>{
    return this.http.get<Room>(this.apiUrl + "/rooms/"+roomId).pipe(
      tap((room: Room) => {
        this.setRoom(room);
      })
    );
  }

  checkRoom(hotelId:any,param:any) :Observable<Room[]> {
    return this.http.post<Room[]>(`${this.apiUrl}/hotels/${hotelId}/rooms`,param)
  }
  getAmenityImage(image:any): any{
    return `http://localhost:8080/images${image}`;
  }
  getRoomImage(image:any): any{
    return `http://localhost:8080/images/rooms/${image}`;
  }


  calculateTempPrice(room: Room, adults: number, children: number, infants: number, daysStayed: number): number {
    let totalPrice = room.pricePerNight * daysStayed;

    if (adults > room.capacity) {
      const additionalAdults = adults - room.capacity;
      totalPrice += additionalAdults * room.adultPrice //* daysStayed;
    }

    totalPrice += children * room.childPrice //* daysStayed;
    totalPrice += infants * room.infantPrice //* daysStayed;

    
    const discount = 0.1; 
    const tax = 0.05; 

    //const discountAmount = totalPrice * discount;
    //const taxAmount = totalPrice * tax;

    //totalPrice = totalPrice - discountAmount + taxAmount;

    return totalPrice;
  }

  getPriceValue() {
    return this.priceSource.value;
  }

}
