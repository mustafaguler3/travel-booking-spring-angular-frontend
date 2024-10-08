import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { HotelListComponent } from './feature/hotel/hotel-list/hotel-list.component';
import { ContactComponent } from './feature/contact/contact.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UnauthorizedComponent } from './core/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './core/forbidden/forbidden.component';
import { VerifyEmailComponent } from './core/verify-email/verify-email.component';
import { EmailSentComponent } from './core/email-sent/email-sent.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { HotelDetailComponent } from './feature/hotel/hotel-detail/hotel-detail.component';
import { RoomDetailComponent } from './feature/room/room-detail/room-detail.component';
import { HotelSearchComponent } from './feature/hotel/hotel-search/hotel-search.component';
import { VerifyOtpComponent } from './core/verify-otp/verify-otp.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { RoomBookingComponent } from './feature/room/room-booking/room-booking.component';
import { BookingReceivedComponent } from './feature/booking/booking-received/booking-received.component';
import { RoomBookingsComponent } from './auth/myBookings/room/room-bookings/room-bookings.component';
import { HotelReservationComponent } from './feature/hotel/hotel-reservation/hotel-reservation.component';
import { FlightListComponent } from './feature/flights/flight-list/flight-list.component';
import { FlightBookingComponent } from './feature/flights/flight-booking/flight-booking.component';
import { TestComponent } from './feature/test/test.component';
import { FlightDetailComponent } from './feature/flights/flight-detail/flight-detail.component';
import { FlightPaymentComponent } from './feature/flights/flight-payment/flight-payment.component';
import { BookingConfirmedComponent } from './feature/flights/booking-confirmed/booking-confirmed.component';


const routes: Routes = [
  {path:"",redirectTo:"'home",pathMatch: "full"},
  {path:"test",component:TestComponent},
  {path:"home",component: HomeComponent,data:{breadcrumd:"Home"}},
  {path:"hotels",component:HotelListComponent},
  {path:"server-error",component:ServerErrorComponent},
  {path:"flight/:flightId",component:FlightDetailComponent},
  {path:"flight-payment",component:FlightPaymentComponent},
  {path:"unauthorized",component:UnauthorizedComponent},
  {path:"hotel-search",component:HotelSearchComponent},
  {path:"booking-confirmed",component:BookingConfirmedComponent},
  {path:"booking-received",component: BookingReceivedComponent},
  {path:"hotel-reservation",component:HotelReservationComponent},
  {path:"flights",component:FlightListComponent},
  {path:"flight-booking",component:FlightBookingComponent},
  {path:"hotel-detail/:hotelId",component:HotelDetailComponent},
  {path:"room-detail/:roomId",component:RoomDetailComponent},
  {path:"room-booking",component:RoomBookingComponent},
  {path:"forbidden",component:ForbiddenComponent},
  {path:"verify-otp",component: VerifyOtpComponent},
  {path:"not-found",component:NotFoundComponent},
  {path:"email-sent",component:EmailSentComponent},
  {path:"forgot-password",component:ForgotPasswordComponent},
  {path:"test-error",component:TestErrorComponent},
  {path:"reset-password",component: ResetPasswordComponent},
  {path:"verify-email",component:VerifyEmailComponent},
  {path:"contact",component:ContactComponent},
  {path:"auth",loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
