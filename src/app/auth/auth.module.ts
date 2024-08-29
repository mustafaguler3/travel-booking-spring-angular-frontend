import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ToastModule } from 'primeng/toast';
import { FileUploadModule } from 'primeng/fileupload';
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RoomBookingsComponent } from './myBookings/room/room-bookings/room-bookings.component';
import { HotelBookingsComponent } from './myBookings/hotel/hotel-bookings/hotel-bookings.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
@NgModule({
  declarations: [LoginComponent,RegisterComponent, ProfileComponent, ForgotPasswordComponent, ResetPasswordComponent, RoomBookingsComponent, HotelBookingsComponent, MyProfileComponent],
  imports: [
    CommonModule,FormsModule,
    AuthRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    ToastModule,
    PaginationModule.forRoot(),
    FileUploadModule
  ],
  exports: [LoginComponent,RegisterComponent,ProfileComponent]
})
export class AuthModule { }
