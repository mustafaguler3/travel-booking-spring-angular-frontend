import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AuthModule } from '../auth/auth.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [NavbarComponent, HomeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule,
    AvatarGroupModule,
    AvatarModule,
    AuthModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,useClass: JwtInterceptor,multi:true
  }],
  exports: [NavbarComponent,HomeComponent]
})
export class CoreModule { }
