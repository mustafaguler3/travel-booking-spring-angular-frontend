import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toast.service';
import { NavigationExtras, Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private toastService: ToastService,
              private router: Router
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {

       if(error){
        if(error.status === 400){
          if(error.error.errors){
            throw error.error;
          }else {
            this.toastService.showError(error.error,"")
          }
        };


        if(error.status === 403){
          this.toastService.showError(error.error,"")
          console.error('Hata:', error.message);
          //this.router.navigate(['/verify-email']);
        }

        if(error.status === 401){
          this.toastService.showError(error.error,"")

          //this.router.navigateByUrl("/unauthorized",navigationExtras)
        }
        if(error.status === 404){
          this.toastService.showError(error.error,"")
          //this.router.navigateByUrl("/not-found",navigationExtras)
        }

        if(error.status === 500){
          this.toastService.showError(error.error,"")
          const navigationExtras: NavigationExtras = {
            state: {
              error: error.error
            }
          }
          //this.router.navigateByUrl("/server-error",navigationExtras)
        }
       }
        return throwError(() => new Error(error.error
        ));
      })
    );
  }
}
