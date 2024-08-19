import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { Hotel } from 'src/app/shared/models/hotel';
import { Pagination } from '../../../shared/models/pagination';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotels: any[]
  errorMessage: string[] = []
  pageSize = 6;
  totalPages = 0;
  totalElements = 0;
  pageNumber = 1;

  constructor(private hotelService: HotelService){}

  ngOnInit(): void {
    this.getHotels(this.pageNumber,this.pageSize)
  }

  getHotelImageUrl(hotelPicture: any): any {
    return `http://localhost:8080/uploads/hotels/${hotelPicture}`;
  }

  pageChanged(event: any){

    if(event.page <= this.totalPages){
      console.log("Page changed to:", event.page);
      this.pageNumber = event.page;
      this.getHotels(this.pageNumber,this.pageSize);
    }else {
      console.log('No more pages to display');
    }
    
  }

  getHotels(pageNumber:any,pageSize:any){
    this.hotelService.getHotels(pageNumber - 1,pageSize).subscribe({
      next: (response: any) => {
        this.hotels = response.content;
            this.pageNumber = response.pageNumber;
            this.pageSize = response.pageSize;
            if (this.hotels.length === 0 && pageNumber > 0) {
                this.totalPages = pageNumber;
            } else {
                this.totalPages = response.totalPages;
                this.totalElements = response.totalElements;
            }
      },
      error: (err) => {
        console.log("Error => " +err)
      }
    })
  }
}
