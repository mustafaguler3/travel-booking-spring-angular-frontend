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
import { GalleryModule, Gallery, GalleryItem } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './hotel/review/review.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from '../core/interceptors/http-error.interceptor';
import { JwtInterceptor } from '../core/interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    HotelListComponent,
    ContactComponent,
    FooterComponent,
    SectionHeaderComponent,
    HotelDetailComponent,
    ReviewComponent
  ],
  imports: [
    
    CommonModule,
    CardModule,
    ButtonModule,
    CoreModule,
    GalleryModule,
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
