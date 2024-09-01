import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.scss']
})
export class FlightBookingComponent implements OnInit{

  currentUser:any
  bookingForm:any

  constructor(private authService:AuthService,
              private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      userId:[""],
      flightId: [""],
      travelDate:[""],
      adult:[0],
      children: [0],
      infant: [0],
      flightClass:[""],
      ticketType:[""],
      airline:[""],
      passengerFirstName:[""],
      passengerLastName:[""],
      passengerEmail:[""],
      passengerPhoneNumber:[""],
      passengerDateOfBirth:[""],
      passengerPassportNumber:[""],
      paymentType:[""],
      luggage:[""]
    })
  }
}
