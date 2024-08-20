import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { HotelSearchParams } from 'src/app/shared/models/hotel-search-params';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/shared/models/hotel';
import { Amenity } from '../../../shared/models/hotel';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.scss']
})
export class HotelSearchComponent implements OnInit{

  searchParams: HotelSearchParams
  hotels: any[]
  amenities:any[]

  constructor(private hotelService: HotelService,
              private activatedRoute: ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchParams = {
        location: params["location"],
        checkInDate: new Date(params["checkInDate"]),
        checkOutDate: new Date(params["checkOutDate"]),
        adults: +params["adults"],
        children: +params["children"],
        infant: +params["infant"] 
      }
    })
    
    console.log("Params => "+ JSON.stringify(this.searchParams))

    this.searchHotel()
  }

  searchHotel(){
    this.hotelService.searchHotels(this.searchParams).subscribe({
      next: (response: Hotel[]) => {
        console.log("Res => "+ JSON.stringify(response))
        this.hotels = response
        console.log("Amenities -> "+ this.amenities)

      
      },
      error: (err) => {
        console.log("Error => " + err)
      }
    })
  }

  getAmenityImage(image:any){
    return this.hotelService.getAmenityImage(image)
  }

  getHotelImage(image:any){
    return this.hotelService.getHotelImageUrl(image)
  }

}
