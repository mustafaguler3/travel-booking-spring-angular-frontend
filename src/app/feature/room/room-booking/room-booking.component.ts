import { Component, OnInit } from '@angular/core';
import * as momentt from 'moment';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/shared/models/hotel';
import { BookingService } from '../service/booking.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { RoomService } from '../service/room.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import {
  securityCodeValidator,
  expiryDateValidator,
  validateCardNumber,
} from '../../../auth/validators/confirm-password';
import { BookingDetails } from 'src/app/shared/models/booking-details';
import { Subscription } from 'rxjs';
import { ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss'],
})
export class RoomBookingComponent implements OnInit {
  room: Room;
  roomImages: any[] 
  roomId: any;
  adultCount: number = 0;
  childCount: number = 0;
  infantCount: number = 0;
  currentUser: any;

  totalPrice: number = 0;
  discount: number = 0.5;
  tax: number = 0.1;
  subtotal: number = 0;
  finalTotal: number = 0;

  bookingForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastService: ToastService,
    private bookingService: BookingService,
    private roomService: RoomService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.room = this.roomService.getRoomValue();
    
    if(this.room.images && Array.isArray(this.room.images)){
      this.roomImages = this.room.images.map(image => 
        new ImageItem({
          src: this.getImages(image),
          thumb: this.getImages(image)
        })
      )
    }
    
    console.log("Room image : " + this.roomImages)
    this.currentUser = this.authService.getCurrentUserValue();
    // Initialize the form group with controls
    this.bookingForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{11}$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      note: [''],
      adults: [this.adultCount, [Validators.required]],
      children: [this.childCount, [Validators.required]],
      infant: [this.infantCount, [Validators.required]],
      checkInDate: ['', [Validators.required]],
      checkOutDate: ['', [Validators.required]],
      roomId: [this.room.id, [Validators.required]],
      userId: [this.currentUser.userId],
        paymentType: ["CREDIT_CARD"],
        paypalEmail: [''],
        cardNumber: ['', ],
        cardHolderName: [''],
        cardExpiryDate: [''],
        cardSecurityCode: [''],
      
      
    });

    this.bookingForm
      .get('paymentType')
      .valueChanges.subscribe((paymentType) => {
        this.setPaymentValidators(paymentType);
      });

    this.updateTotalPrice();

    this.bookingForm
      .get('adults')
      ?.valueChanges.subscribe(() => this.updateTotalPrice());
    this.bookingForm
      .get('children')
      ?.valueChanges.subscribe(() => this.updateTotalPrice());
    this.bookingForm
      .get('infant')
      ?.valueChanges.subscribe(() => this.updateTotalPrice());
    this.bookingForm
      .get('checkInDate')
      ?.valueChanges.subscribe(() => this.updateTotalPrice());
    this.bookingForm
      .get('checkOutDate')
      ?.valueChanges.subscribe(() => this.updateTotalPrice());
  }

  
  calculateDaysStayed(): number {
    const checkInDate = this.bookingForm.get('checkInDate').value;
    const checkOutDate = this.bookingForm.get('checkOutDate').value;

    if (checkInDate && checkOutDate) {
      const checkIn = momentt(checkInDate);
      const checkOut = momentt(checkOutDate);

      return checkOut.diff(checkIn, 'days');
    }
    return 0;
  }


  getImages(roomImage:any){
    return this.roomService.getRoomImage(roomImage);
  }

  updateTotalPrice(): void {
    const adults = this.bookingForm.get('adults')?.value || 0;
    const children = this.bookingForm.get('children')?.value || 0;
    const infants = this.bookingForm.get('infant')?.value || 0;
    const daysStayed = this.calculateDaysStayed();

    if (!this.room || daysStayed === 0) {
      this.totalPrice = 0;
      this.subtotal = 0;
      this.finalTotal = 0;
      return;
    }

    this.subtotal = this.roomService.calculateTempPrice(
      this.room,
      adults,
      children,
      infants,
      daysStayed
    );

    // Calculate discount amount
    //const discountAmount = this.subtotal * this.discount;
    // Calculate tax amount
    //const taxAmount = this.subtotal * this.tax;
    // Final total price
    //this.finalTotal = this.subtotal - discountAmount + taxAmount;
    this.totalPrice = this.subtotal
    console.log('Subtotal:', this.subtotal);
    console.log('Final Total (with discount and tax):', this.finalTotal);
  }

  get f() {
    return this.bookingForm.controls;
  }


  booking() {
    this.bookingService.bookRoom(this.bookingForm.value).subscribe({
      next: (response) => {
        console.log('Response : ' + response);
        this.toastService.showSuccess(
          'Success',
          'Your booking has been received'
        );
        this.router.navigate(['/booking-received']); //reference number
      },
      error: (error) => {
        console.log('Error : ' + error);
        this.toastService.showError(
          'Error',
          'An error occurred getting your booking'
        );
      },
    });
  }

  setPaymentValidators(paymentType: string) {
    const cardNumber = this.bookingForm.get('cardNumber');
    const cardHolderName = this.bookingForm.get('cardHolderName');
    const cardExpiryDate = this.bookingForm.get('cardExpiryDate');
    const cardSecurityCode = this.bookingForm.get('cardSecurityCode');
    const paypalEmail = this.bookingForm.get('paypalEmail');
  
    if (paymentType === 'CREDIT_CARD') {
      // Set validators for credit card fields
      cardNumber?.setValidators([Validators.required, Validators.minLength(13), Validators.maxLength(16)]);
      cardHolderName?.setValidators([Validators.required]);
      cardExpiryDate?.setValidators([Validators.required]);
      cardSecurityCode?.setValidators([Validators.required, Validators.pattern('^[0-9]{3}$')]);
      paypalEmail?.clearValidators();
    } else if (paymentType === 'PAYPAL') {
      // Set validators for PayPal email
      paypalEmail?.setValidators([Validators.required, Validators.email]);
      // Clear validators for credit card fields
      cardNumber?.clearValidators();
      cardHolderName?.clearValidators();
      cardExpiryDate?.clearValidators();
      cardSecurityCode?.clearValidators();
    }
  
    // Update validity of the form controls
    cardNumber?.updateValueAndValidity();
    cardHolderName?.updateValueAndValidity();
    cardExpiryDate?.updateValueAndValidity();
    cardSecurityCode?.updateValueAndValidity();
    paypalEmail?.updateValueAndValidity();
  }

  increaseCount(type: string) {
    if (type === 'adults') {
      this.adultCount++;
      this.bookingForm.get('adults')?.setValue(this.adultCount);
    } else if (type === 'child') {
      this.childCount++;
      this.bookingForm.get('children')?.setValue(this.childCount);
    } else if (type === 'infant') {
      this.infantCount++;
      this.bookingForm.get('infant')?.setValue(this.infantCount);
    }
  }

  decreaseCount(type: string) {
    if (type === 'adults' && this.adultCount > 0) {
      this.adultCount--;
      this.bookingForm.get('adults')?.setValue(this.adultCount);
    } else if (type === 'child' && this.childCount > 0) {
      this.childCount--;
      this.bookingForm.get('children')?.setValue(this.childCount);
    } else if (type === 'infant' && this.infantCount > 0) {
      this.infantCount--;
      this.bookingForm.get('infant')?.setValue(this.infantCount);
    }
  }
}
