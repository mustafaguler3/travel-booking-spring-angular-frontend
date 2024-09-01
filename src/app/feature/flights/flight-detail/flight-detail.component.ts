import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { ActivatedRoute } from '@angular/router';
import { Flight } from 'src/app/shared/models/flight';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit{


  flightId:any
  flight:Flight

  constructor(private flightService: FlightService,
              private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      this.getFlight()
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

  calculatePrice(){
    
  }

}
