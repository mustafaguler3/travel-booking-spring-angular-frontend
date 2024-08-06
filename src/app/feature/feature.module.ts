import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { CardModule } from 'primeng/card'; 
import { ButtonModule } from 'primeng/button';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from "../core/core.module";
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HotelListComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    CoreModule,
    RouterModule
],
  exports: [HotelListComponent,FooterComponent]
})
export class FeatureModule { }
