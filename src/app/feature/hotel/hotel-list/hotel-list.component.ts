import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Hotel } from 'src/app/shared/models/hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit{

  hotels!: Hotel[]

  constructor(private hotelService: HotelService){}

  ngOnInit(): void {
      this.getHotels()
  }

  getHotels(){
    this.hotelService
    .getHotels()
    .subscribe(response => {
      this.hotels = response;
    },
    err => {
    console.log(err)
    })
  }
}
