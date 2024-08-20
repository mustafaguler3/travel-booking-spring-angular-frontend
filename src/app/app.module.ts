import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { SharedModule } from './shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { ToastService } from './shared/services/toast.service';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    NgxSpinnerModule.forRoot({}),
    PaginationModule.forRoot(),
    AuthModule,
    FeatureModule,
    RouterModule,
    ToastModule,
    MatPaginatorModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:HttpErrorInterceptor,multi:true},
    
    ToastService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
