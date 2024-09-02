import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from 'src/app/shared/models/flight';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit{

  flightForm:any
  flightId:any
  flight:Flight
  date: Date | undefined;
  passportExpirt: Date | undefined
  currentUser:any

  constructor(private flightService: FlightService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              private authService: AuthService
  ){}

  ngOnInit(): void {
    this.flightForm = this.fb.group({
      phoneNumber: ["",],
      email: ["",[Validators.required]],
      title: ["",[Validators.required]],
      flightClass: ["",[Validators.required]],
      ticketType: ["",[Validators.required]],
      firstName: ["",[Validators.required]],
      lastName: ["",[Validators.required]],
      dateOfBirth: ["",[Validators.required]],
      nationality: ["",[Validators.required]],
      passportNumber: ["",[Validators.required]],
      passportCountry: ["",[Validators.required]],
      passportExpiry: ["",[Validators.required]]
    })
    this.flightId = this.route.snapshot.paramMap.get("flightId");
    this.currentUser = this.authService.getCurrentUserValue()
    this.getFlight()

    console.log("UserId : "+JSON.stringify(this.currentUser.userId))
    console.log("FlightId : "+this.flightId)
  }

  get f(){
    return this.flightForm.controls
  }

  flightBooking(){
    const data = {
      flightId: this.flightId,
      userId: this.currentUser.userId,
      phoneNumber: this.flightForm.get("phoneNumber").value,
      email: this.flightForm.get("email").value,
      title: this.flightForm.get("title").value,
      flightClass: this.flightForm.get('flightClass').value,
      firstName: this.flightForm.get("firstName").value,
      ticketType: this.flightForm.get("ticketType").value,
      lastName: this.flightForm.get("lastName").value,
      dateOfBirth: this.flightForm.get("dateOfBirth").value,
      nationality: this.flightForm.get("nationality").value,
      passportNumber: this.flightForm.get("passportNumber").value,
      passportCountry: this.flightForm.get("passportCountry").value,
      passportExpiry: this.flightForm.get("passportExpiry").value,
    }
    if(this.flightForm.valid){
      localStorage.setItem("flightDetail", JSON.stringify(data));
      console.log("Data saved to localStorage:", data);
      this.router.navigate(["flight-payment"], { state: data });
    }else {
      console.log("an error occurred during form ")
    }

      
    
    //this.router.navigate(["flight-payment"],{state:data})

  }

  getFlightImage(image: any) {
    return this.flightService.getFlightImage(image)
  }

  getFlight(){
    this.flightId = this.route.snapshot.paramMap.get("flightId")
    this.flightService.getFlight(this.flightId).subscribe({
      next: (response) => {
        console.log("Response => " + response)
        this.flight = response
      }
    })
  }

  

}
