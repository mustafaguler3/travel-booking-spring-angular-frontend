import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { FlightService } from '../services/flight.service';
import { Flight } from 'src/app/shared/models/flight';

@Component({
  selector: 'app-flight-payment',
  templateUrl: './flight-payment.component.html',
  styleUrls: ['./flight-payment.component.css']
})
export class FlightPaymentComponent implements OnInit{


  paymentForm:any
  flightId: any
  flight:Flight

  firstName:any
  lastName:any
  dateOfBirth: any
  totalPrice:any = 0;

  constructor(private route: Router,
              private fb: FormBuilder,
              private paymentService: PaymentService,
              private flightService: FlightService,
              private toastService: ToastService
  ){}

  getFlightImage(image:any){
    return this.flightService.getFlightImage(image)
  }

  ngOnInit(): void {
      const flightDetail = localStorage.getItem("flightDetail")
      const data = JSON.parse(flightDetail)

      this.flightId = data.flightId;
      this.firstName = data.firstName
      this.dateOfBirth = data.dateOfBirth
      this.lastName = data.lastName;
      this.totalPrice = data.totalPrice;

      console.log("Flight ID : "+this.flightId)
      
      this.paymentForm = this.fb.group({
        paymentType: ["CREDIT_CARD"],
        cardNumber: ["",[Validators.required]],
        cardHolderName: ["",[Validators.required]],
        cardExpiryDate: ["",[Validators.required]],
        cardSecurityCode: ["",[Validators.required]]
      });

      console.log("Data for Local : "+JSON.stringify(data))
      console.log("Data for email : "+data.email)
      console.log("Total Price :" +data.totalPrice)

      this.getFlight()
  }

  getFlight(){
    this.flightService.getFlight(this.flightId).subscribe({
      next: (res) => {
        this.flight = res
      },
      error: (err) => {
        console.log("Error : "+err)
      } 
    })
  }

  
  processPayment(){
    const flightDetail = localStorage.getItem("flightDetail")
    const flightData = JSON.parse(flightDetail)
    
    const data = {
      paymentType: this.paymentForm.get('paymentType').value,
      cardNumber: this.paymentForm.get('cardNumber').value,
      cardHolderName:this.paymentForm.get('cardHolderName').value,
      cardExpiryDate:this.paymentForm.get('cardExpiryDate').value,
      cardSecurityCode:this.paymentForm.get('cardSecurityCode').value,
      ...flightData
    }
    this.flightService.bookingFlight(data).subscribe({
      next:(response) => {
        console.log("res-> "+response)
        response.airline = this.flight.airlineName
        response.airlineLogo = this.flight.airlineLogo
        response.totalPrice = this.totalPrice
        localStorage.setItem('bookingDetails', JSON.stringify(response));
        this.route.navigate(["/booking-confirmed"])
        localStorage.removeItem("flightDetail")
      },
      error: (err) => {
        console.log("Error : "+err)
        this.toastService.showError("Error","Your payment has not been received")
      }
    })
  }
}
