import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Flight } from 'src/app/shared/models/flight';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit{

  flights: Flight[]

  constructor(private flightService: FlightService){}

  ngOnInit(): void {
      this.getFlights()
  }

  getFlightImage(image:any){
    return this.flightService.getFlightImage(image)
  }

  getFlights(){
    this.flightService.getFlights().subscribe({
      next: (response) => {
        console.log("Response : "+response)
        this.flights = response
      },
      error: (err) => {
        console.log("Error : " + err)
      }
    })
  }
}
