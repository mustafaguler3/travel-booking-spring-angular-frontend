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
      
      console.log("Flight ID : "+this.flightId)
      
      this.paymentForm = this.fb.group({
        cardNumber: ["",[Validators.required]],
        cardHolderName: ["",[Validators.required]],
        cardExpiryDate: ["",[Validators.required]],
        cardSecurityCode: ["",[Validators.required]]
      });

      console.log("Data for Local : "+JSON.stringify(data))
      console.log("Data for email : "+data.email)

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
      cardNumber: this.paymentForm.get('cardNumber').value,
      cardHolderName:this.paymentForm.get('cardHolderName').value,
      cardExpiryDate:this.paymentForm.get('cardExpiryDate').value,
      cardSecurityCode:this.paymentForm.get('cardSecurityCode').value,
      ...flightData
    }
    this.flightService.bookingFlight(data).subscribe({
      next:(response) => {
        console.log("res-> "+response)
        this.toastService.showSuccess("Success","Your payment has been received")
      },
      error: (err) => {
        this.toastService.showError("Error","Your payment has not been received")
      }
    })
  }
}
