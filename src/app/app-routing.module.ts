import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { HotelListComponent } from './feature/hotel/hotel-list/hotel-list.component';
import { ContactComponent } from './feature/contact/contact.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UnauthorizedComponent } from './core/unauthorized/unauthorized.component';
import { ForbiddenComponent } from './core/forbidden/forbidden.component';
import { VerifyEmailComponent } from './core/verify-email/verify-email.component';
import { EmailSentComponent } from './core/email-sent/email-sent.component';


const routes: Routes = [
  {path:"",redirectTo:"'home",pathMatch: "full"},
  {path:"home",component: HomeComponent},
  {path:"hotels",component:HotelListComponent},
  {path:"server-error",component:ServerErrorComponent},
  {path:"unauthorized",component:UnauthorizedComponent},
  {path:"forbidden",component:ForbiddenComponent},
  {path:"not-found",component:NotFoundComponent},
  {path:"email-sent",component:EmailSentComponent},
  {path:"test-error",component:TestErrorComponent},
  {path:"verify-email",component:VerifyEmailComponent},
  {path:"contact",component:ContactComponent},
  {path:"auth",loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
