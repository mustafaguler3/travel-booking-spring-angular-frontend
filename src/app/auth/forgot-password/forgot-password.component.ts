import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit{

  resetForm: FormGroup | any
  email:any

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private toastService: ToastService,
              private router: Router
  ){
    
  }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ["",[Validators.required,Validators.email]]
    })
  }

  get f(){
    return this.resetForm.controls
  }

  sendCode(){
    this.authService.sentResetCode(this.resetForm.value.email)
    .subscribe({
      next: response => {
        console.log(response);
          this.router.navigateByUrl("/verify-otp"); 
          this.toastService.showSuccess("Success", "Reset code has been sent to your email address.")
      },
      error: err => {
        console.error("Error => " + err.message);
        this.toastService.showError("Error", "An error has occurred during sending code.");
      }
    })
  }
}
