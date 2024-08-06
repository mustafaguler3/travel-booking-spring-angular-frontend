import { NgModule } from '@angular/core';
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
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    AuthModule,
    FeatureModule,
    RouterModule,
    ToastModule
  ],
  providers: [
    ToastService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
