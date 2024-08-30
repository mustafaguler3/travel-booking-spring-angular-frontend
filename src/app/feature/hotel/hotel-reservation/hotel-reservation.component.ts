import { Component } from '@angular/core';
import { Hotel, Room } from 'src/app/shared/models/hotel';

@Component({
  selector: 'app-hotel-reservation',
  templateUrl: './hotel-reservation.component.html',
  styleUrls: ['./hotel-reservation.component.scss']
})
export class HotelReservationComponent {
  reservationForm:any
  hotels: Hotel[] = [];
  rooms: Room[] = [];
  booking: any = {
    hotelId: null,
    roomId: null,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    checkInDate: '',
    checkOutDate: '',
    paymentMethod: 'creditCard',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };

  submitBooking(){

  }
}
