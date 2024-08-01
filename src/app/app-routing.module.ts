import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { HotelListComponent } from './feature/hotel/hotel-list/hotel-list.component';


const routes: Routes = [
  {path:"",redirectTo:"'home",pathMatch: "full"},
  {path:"home",component: HomeComponent},
  {path:"hotels",component:HotelListComponent},
  {path:"auth",loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
