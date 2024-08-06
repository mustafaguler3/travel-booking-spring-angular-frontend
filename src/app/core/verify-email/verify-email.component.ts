import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ToastService } from '../../shared/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent {

  form: any;
  emailSent: boolean = false;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private toastService:ToastService,
              private router:Router
  ){
    this.form = this.fb.group({
      email: ["",[Validators.required,Validators.email]]
    })
  }

  get f(){
    return this.form.controls;
  }

  resendVerificationEmail() {
    if (this.form.valid) {
      const email = this.form.get('email')?.value;
      this.authService.resendVerificationEmail(email).subscribe(
        () => {
          this.emailSent = true;
          //this.router.navigateByUrl("/email-sent")
        },
        error => {
          console.error('Error sending verification email:', error);
        }
      );
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
