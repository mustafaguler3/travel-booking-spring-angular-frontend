import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { CardModule } from 'primeng/card'; 
import { ButtonModule } from 'primeng/button'

@NgModule({
  declarations: [
    HotelListComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  exports: [HotelListComponent]
})
export class FeatureModule { }
