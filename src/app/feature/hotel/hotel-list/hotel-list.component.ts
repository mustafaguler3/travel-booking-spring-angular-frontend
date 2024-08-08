import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Hotel } from 'src/app/shared/models/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit{

  hotels: Hotel[] = []
  errorMessage: string[] = []

  constructor(private hotelService: HotelService){
    
  }

  ngOnInit(): void {
    this.getHotels()
  }

  getHotelImageUrl(hotelPicture: string): string {
    return `http://localhost:8080/uploads/hotels/${hotelPicture}`;
  }

  getHotels(){
    this.hotelService.getHotels().subscribe(
      (response: Hotel[]) => {
        console.log("Response => "+response)
      this.hotels = response;
    },
    err => {
      console.log("Error : "+err)
      this.errorMessage.push(err)
    })
  }
}
