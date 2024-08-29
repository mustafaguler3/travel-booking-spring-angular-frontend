import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RoomBookingsComponent } from './myBookings/room/room-bookings/room-bookings.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:ProfileComponent,
    children: [
    { path: 'my-room-bookings', component: RoomBookingsComponent },
    {path:"my-profile",component: MyProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
