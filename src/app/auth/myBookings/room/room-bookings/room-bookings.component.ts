import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../../feature/room/service/booking.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RoomBookingResponse } from 'src/app/shared/models/booking-request';

@Component({
  selector: 'app-room-bookings',
  templateUrl: './room-bookings.component.html',
  styleUrls: ['./room-bookings.component.scss']
})
export class RoomBookingsComponent implements OnInit{

  roomBooking: any[]
  pageSize = 6;
  totalPages;
  totalElements;
  pageNumber = 1;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
      this.getMyBookings()
  }

  pageChanged(event: any){
    if(event.page <= this.totalPages){
      console.log("Page changed to:", event.page);
      this.pageNumber = event.page;
      this.getMyBookings();
    }else {
      console.log('No more pages to display');
    }
  }


  getMyBookings(){
    this.authService.getMyBookings(this.pageNumber - 1,this.pageSize).subscribe({
      next: (response) => {
        this.roomBooking = response.content;
        this.pageNumber = response.pageNumber
        this.pageSize = response.pageSize
        if (this.roomBooking.length === 0 && this.pageNumber > 0) {
          this.totalPages = this.pageNumber;
      } else {
          this.totalPages = response.totalPages;
          this.totalElements = response.totalElements;
      }
      },
      error: (err) => {
        console.log("Error : "+ err)
      }
    })
  }
}
