import { Component, OnInit } from '@angular/core';
import { Hotel, HotelWithReviews, Review, ReviewStats } from 'src/app/shared/models/hotel';
import { HotelService } from '../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RoomService } from '../../room/service/room.service';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit{

  reviewForm: any
  hotel: Hotel
  hotelId: any
  hotelImages: any[] = [];
  rooms: any[]
  checkForm:any

  adultCount: number = 0;
  childCount: number = 0;
  infantCount: number = 0;
  totalGuest: 0

  reviews: Review[]
  currentUser: any
  userId: any
  averageRating = 0;
  locationForRoom:any;

  ratingPercentages:any
  totalReviews:any
  ratingCounts:any

  constructor(private hotelService: HotelService,
              private activatedRoute : ActivatedRoute,
              private fb: FormBuilder,
              private toastService: ToastService,
              public authService: AuthService,
              private roomService: RoomService,
              private lightbox: Lightbox
  ){
    
  }

  get f(){
    return this.reviewForm.controls
  }

  ngOnInit(): void {
    this.hotelId = this.activatedRoute.snapshot.paramMap.get("hotelId")
    this.getHotel()
    this.getReviewsForHotel()

    this.checkForm = this.fb.group({
      checkInDate: ["",Validators.required],
      checkOutDate: ["",Validators.required],
      adults: [0,[Validators.required]],
      children: [0,[Validators.required]],
      infant: [0,[Validators.required]]
    })
    this.reviewForm = this.fb.group({
      comment: ["",[Validators.required]],
      rating: [null,[Validators.required]]
    })
    console.log("Reviews " + JSON.stringify(this.reviews))

    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.userId = this.currentUser.userId;
    });
    
  }

  openLightbox(index: number): void {
    this.lightbox.open(this.hotelImages, index);
  }

  closeLightbox(): void {
    this.lightbox.close();
  }
  increaseCount(type: string) {
    if (type === 'adults') {
      this.adultCount++;
    } else if (type === 'child') {
      this.childCount++;
    } else if (type === 'infant') {
      this.infantCount++;
    }
  }

  decreaseCount(type: string) {
    if (type === 'adults' && this.adultCount > 0) {
      this.adultCount--;
    } else if (type === 'child' && this.childCount > 0) {
      this.childCount--;
    } else if (type === 'infant' && this.infantCount > 0) {
      this.infantCount--;
    }
  }

  
  addReview() {
      const reviewData = {
        userId: this.userId,
        hotelId: this.hotelId,
        rating: this.reviewForm.get('rating')?.value,
        comment: this.reviewForm.get('comment')?.value,
        publishedDate: new Date().toISOString()
      };
     this.hotelService
        .addReview(reviewData)
        .subscribe({
          next: (response) => {
            console.log("Response:", response);
            if (response) {
              this.toastService.showSuccess("Success", "Added review successfully");
              //this.router.navigateByUrl("/hotel-detail/"+this.hotelId)
            } else {
              console.error('Error adding review:', response);
              this.toastService.showError("Error", "An error occurred while adding the review");
            }
          },
          error: (error) => {
            console.error('Error adding review:', error);
            this.toastService.showError("Error", "An error occurred");
          }
      }); 
  }


  getImages(hotelImage: any){
    const imageUrl = this.hotelService.getHotelImageUrl(hotelImage);
    return imageUrl;
  }
  
  getUserPictureInReview(image:any){
    return "http://localhost:8080/api/auth/uploads/users/"+image
  }
  

  getRoomImage(roomImage:any){
    return this.hotelService.getRoomImage(roomImage)
  }

  getAmenityImage(amenityImage:any){
    return this.hotelService.getAmenityImage(amenityImage)
  }


  getReviewsForHotel(){
    this.hotelService.getReviews(this.hotelId).subscribe({
      next: (response:any) => {
        //console.log("Response ->" + JSON.stringify(response))
        this.reviews = response.hotel.reviews
        this.ratingCounts = response.reviewStats.ratingCounts
        this.ratingPercentages = response.reviewStats.ratingPercentages
        this.totalReviews = response.reviewStats.totalReviews
        this.averageRating = response.reviewStats.averageRating
        
      },
      error: (err) => {
        console.log("Error in review -> "+err)
      }
    })
  }

  getHotel(){
      this.hotelService.getHotel(this.hotelId).subscribe({
        next: (res) => {
          this.hotel = res
          this.rooms = res.rooms
          this.averageRating = res.averageRating
          
          if(this.hotel.images && Array.isArray(this.hotel.images)){
            this.hotelImages = res.images.map(image => 
              ({
                src: this.getImages(image),
                thumb: this.getImages(image)
              })
            )
          }
        },
        error : err => {
          console.log("Error : "+err)
          console.log("Message : "+err.message)
        }
      })
  }

  checkRoom(){
    console.log("Button clicked");
    const checkData = {
      checkInDate: this.checkForm.get("checkInDate")?.value,
      checkOutDate: this.checkForm.get("checkOutDate")?.value,
      adults: this.adultCount,
      children: this.childCount,
      infant: this.infantCount,
      totalGuests: Number(this.adultCount) + Number(this.childCount) + Number(this.infantCount)
    }


    this.roomService.checkRoom(this.hotelId,checkData)
    .subscribe({
      next: (response) => {
        console.log("Response -> "+response)
        this.rooms = response
      },
      error: (err) => {
        console.log(err)
        this.toastService.showError("error","An error occurred during taking rooms")
      }
    })
  }

  getStars(averageRating: number): string {
    const fullStars = Math.floor(averageRating);  // Full star count
    const halfStar = averageRating % 1 >= 0.5 ? 1 : 0;  // Half star condition
    const emptyStars = 5 - fullStars - halfStar;  // Empty stars
  
    return '★'.repeat(fullStars) + (halfStar ? '★' : '') + '☆'.repeat(emptyStars);
  }
  
}
