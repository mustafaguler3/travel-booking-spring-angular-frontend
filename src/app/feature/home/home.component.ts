import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel/services/hotel.service';
import { HotelSearchParams } from '../../shared/models/hotel-search-params';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  hotelSearchParams: HotelSearchParams = {
    location: '',
    checkInDate: new Date(),
    checkOutDate: new Date(),
    adults: 0,
    children: 0,
    infant: 0
  };
  selectedTab: string = 'flights';
  //hotelSearchForm: any

  constructor(private router: Router,
              private fb: FormBuilder
  ){
    /*this.hotelSearchForm = this.fb.group({
      location: [""],
      checkInDate: [""],
      checkOutDate: [""],
      adults: [0],
      children: [0],
      infant: [0]
    }) */
  }

  ngOnInit(): void {
      
  }

  searchHotel(){
    this.router.navigate(['/hotel-search'], {
      queryParams: { 
        location: this.hotelSearchParams.location,
        checkInDate: this.hotelSearchParams.checkInDate,
        checkOutDate: this.hotelSearchParams.checkOutDate,
        adults: this.hotelSearchParams.adults,
        children: this.hotelSearchParams.children,
        infant: this.hotelSearchParams.infant
      }
    });
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }


  adultCount: number = 0;
  childCount: number = 0;
  infantCount: number = 0;

  // Method to increase the count
  increaseCount(type: string) {
    if (type === 'adult') {
      this.adultCount++;
    } else if (type === 'child') {
      this.childCount++;
    } else if (type === 'infant') {
      this.infantCount++;
    }
  }

  // Method to decrease the count
  decreaseCount(type: string) {
    if (type === 'adult' && this.adultCount > 0) {
      this.adultCount--;
    } else if (type === 'child' && this.childCount > 0) {
      this.childCount--;
    } else if (type === 'infant' && this.infantCount > 0) {
      this.infantCount--;
    }
  }

}
