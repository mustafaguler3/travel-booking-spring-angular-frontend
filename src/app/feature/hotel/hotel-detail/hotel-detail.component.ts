import { Component, OnInit } from '@angular/core';
import { Hotel, Review } from 'src/app/shared/models/hotel';
import { HotelService } from '../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit{

  reviewForm: any
  hotel!: Hotel
  hotelId: any
  hotelImages: GalleryItem[] = [];

  reviews: Review[]
  currentUser: any
  userId: any

  constructor(private hotelService: HotelService,
              private activatedRoute : ActivatedRoute,
              private fb: FormBuilder,
              private toastService: ToastService,
              private authService: AuthService
  ){
    
  }

  get f(){
    return this.reviewForm.controls
  }

  ngOnInit(): void {
    this.hotelId = this.activatedRoute.snapshot.paramMap.get("hotelId")
    this.getHotel()
    this.getReviewsForHotel()

    this.reviewForm = this.fb.group({
      comment: ["",[Validators.required]],
      rating: [null,[Validators.required]]
    })
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.userId = this.currentUser.userId;
    });
    
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
    return this.hotelService.getHotelImageUrl(hotelImage)
  }


  getAmenityImage(amenityImage:any){
    return this.hotelService.getAmenityImage(amenityImage)
  }

  getReviewsForHotel(){
    this.hotelService.getReviews(this.hotelId).subscribe({
      next: (response) => {
        console.log("Response ->"+response)
        this.reviews = response
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
          if(this.hotel.images && Array.isArray(this.hotel.images)){
            this.hotelImages = res.images.map(image => 
              new ImageItem({
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
}
