import { Component, OnInit } from '@angular/core';
import { RoomService } from '../service/room.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Hotel, Room } from 'src/app/shared/models/hotel';
import { ImageItem } from 'ng-gallery';
import { HotelService } from '../../hotel/services/hotel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit{

  roomId:any
  room: any;
  roomImages: any[]
  
  constructor(private roomService: RoomService,
              private route:ActivatedRoute,
              private hotelService: HotelService,
              private fb:FormBuilder,
              private router: Router
  ){}
  
  ngOnInit(): void {
      this.roomId = this.route.snapshot.paramMap.get("roomId")
      this.getRoom()
  }

  getRoom(){
    this.roomService.getRoom(this.roomId).subscribe({
      next: (response) => {
        console.log("Response ->" +JSON.stringify(response))
        this.room = response
        if(this.room.images && Array.isArray(this.room.images)){
          this.roomImages = response.images.map(image => 
            new ImageItem({
              src: this.getImages(image),
              thumb: this.getImages(image)
            })
          )
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  submit(){
    this.roomService.setRoom(this.room)
    //this.router.navigate(["/room-booking",this.roomId])// room-booking/2
    this.router.navigate(["/room-booking"])
  }

  getImages(roomImage:any){
    return this.roomService.getRoomImage(roomImage);
  }

  getAmenityImage(image: any){
    return this.roomService.getAmenityImage(image)
  }

  isRoomReserved(): boolean {
    return this.room?.roomStatus === 'RESERVED';
  }
  
}
