import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Hotel } from 'src/app/shared/models/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotels: any[]
  errorMessage: string[] = []

  constructor(private hotelService: HotelService){}

  ngOnInit(): void {
    this.getHotels()
  }

  getHotelImageUrl(hotelPicture: any): any {
    return `http://localhost:8080/uploads/hotels/${hotelPicture}`;
  }

  getHotels(){
    this.hotelService.getHotels().subscribe({
      next: (response: Hotel[]) => {
        console.log("Hotel images => ", response.map(hotel => hotel.images));
        //console.log("Response => "+ JSON.stringify(response))
        this.hotels = response;
      },
      error: (err) => {
        console.log("Error => " +err)
      }
    })
  }
}
