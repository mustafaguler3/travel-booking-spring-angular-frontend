import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BookingDetails } from 'src/app/shared/models/booking-details';
import { BookingRequest, Payment, RoomBookingResponse } from 'src/app/shared/models/booking-request';
import { Room } from 'src/app/shared/models/hotel';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-booking-received',
  templateUrl: './booking-received.component.html',
  styleUrls: ['./booking-received.component.scss']
})
export class BookingReceivedComponent implements OnInit{

  response: RoomBookingResponse

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.response = navigation?.extras?.state?.['response'];  // state'den gelen bilgileri alıyoruz
  }

  ngOnInit(): void {
    if (this.response) {
      console.log("Reference number : " + this.response.bookingReferenceNumber)
      console.log("creaeted : " + this.response.createdDate)
    }
  }
  
}
