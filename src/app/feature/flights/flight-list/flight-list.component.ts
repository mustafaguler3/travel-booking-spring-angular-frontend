import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Flight } from 'src/app/shared/models/flight';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit{
  
  flights: any[]
  pageNumber = 1;
  pageSize = 6;
  totalPages = 0;
  totalElements=0
  activeTab: number = 1;
  flightId: any
  selectedFlight:any

  tax = 10;
  fee =  20;
  totalPrice = 0;

  constructor(private flightService: FlightService,
              private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      this.getFlights()
  }

  pageChanged(event: any){
    if(event.page <= this.totalPages){
      console.log("Page changed to:", event.page);
      this.pageNumber = event.page;
      this.getFlights();
    }else {
      console.log('No more pages to display');
    }
  }


  getFlightImage(image:any){
    return this.flightService.getFlightImage(image);
  }

  getFlights(){
    this.flightService.getFlights(this.pageNumber-1,this.pageSize).subscribe({
      next: (response) => {
        this.flights = response.content
        this.pageNumber = response.pageNumber;
        this.pageSize = response.pageSize
        this.totalElements = response.totalElements
        this.totalPages = response.totalPages
      },
      error: (err) => {
        console.log("Error : " + err)
      }
    })
  }
  
  setActiveTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }
  selectSpecificFlight(flight: any) {
    this.selectedFlight = flight;
    this.totalPrice = flight.originalPrice + this.tax + this.fee;
  }
}
