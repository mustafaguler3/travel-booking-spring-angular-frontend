import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }


  processPayment(paymentInfo:any){
    return this.http.post<any>(this.apiUrl + "payment",paymentInfo)
  }
}
