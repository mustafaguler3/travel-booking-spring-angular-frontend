import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { CardModule } from 'primeng/card'; 
import { ButtonModule } from 'primeng/button';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from "../core/core.module";
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { HotelDetailComponent } from './hotel/hotel-detail/hotel-detail.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './hotel/review/review.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RoomDetailComponent } from './room/room-detail/room-detail.component';
import { HotelSearchComponent } from './hotel/hotel-search/hotel-search.component';
import { HomeComponent } from './home/home.component';
import { RoomBookingComponent } from './room/room-booking/room-booking.component';
import { TestComponent } from './test/test.component';
import { BookingReceivedComponent } from './booking/booking-received/booking-received.component';
import { RecomendedHotelsComponent } from './hotel/recomended-hotels/recomended-hotels.component';
import { HotelReservationComponent } from './hotel/hotel-reservation/hotel-reservation.component';
import { FlightListComponent } from './flights/flight-list/flight-list.component';

@NgModule({
  declarations: [
    HotelListComponent,
    ContactComponent,
    FooterComponent,
    SectionHeaderComponent,
    HotelDetailComponent,
    ReviewComponent,
    RoomDetailComponent,
    HotelSearchComponent,
    HomeComponent,
    RoomBookingComponent,
    TestComponent,
    BookingReceivedComponent,
    RecomendedHotelsComponent,
    HotelReservationComponent,
    FlightListComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    PaginationModule.forRoot(),
    CoreModule,
    GalleryModule,
    FormsModule,
    LightboxModule,
    ReactiveFormsModule,
    RouterModule,
    BreadcrumbComponent,BreadcrumbItemDirective
],
  exports: [
    HotelListComponent,
    FooterComponent,
    SectionHeaderComponent,
    HotelDetailComponent]
})
export class FeatureModule { }
