import { Component, OnInit } from '@angular/core';
import { BookingRequest } from '../../../shared/models/booking-request';
import { BookingService } from '../../room/service/booking.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Flight } from '../../../shared/models/flight';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-booking-confirmed',
  templateUrl: './booking-confirmed.component.html',
  styleUrls: ['./booking-confirmed.component.css']
})
export class BookingConfirmedComponent implements OnInit{

  bookingDetails: any;
  totalPrice:any
  flightId:any
  flight:Flight

  constructor(private flightService: FlightService) {
    // Retrieve booking details from localStorage
    const storedBookingDetails = localStorage.getItem('bookingDetails');
    this.bookingDetails = storedBookingDetails ? JSON.parse(storedBookingDetails) : null;

    if (this.bookingDetails) {
      this.totalPrice = this.bookingDetails.totalPrice
      this.flightId = this.bookingDetails.flightId
      console.log("Booking Details from localStorage: ", this.bookingDetails);
    } else {
      console.error("No booking details found.");
    }
    this.getFlight()
  }

  ngOnInit(): void {

  }
  getFlightImage(image: any) {
    return this.flightService.getFlightImage(image)
  }
  getFlight(){
    //this.flightId = this.route.snapshot.paramMap.get("flightId")
    this.flightService.getFlight(this.flightId).subscribe({
      next: (response) => {
        console.log("Response => " + response)
        this.flight = response
      }
    })
  }

}
