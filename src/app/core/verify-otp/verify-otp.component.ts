import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss'],
})
export class VerifyOtpComponent implements OnInit {
  timer: any;
  timeLeft: number = 120;
  interval: any;

  otoFocus: any;
  codeForm: any;
  email: any;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toastService: ToastService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.otoFocus = document.querySelectorAll('.otSc');
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
    });
    this.startTimer();

    this.codeForm = this.fb.group({
      resetCode: ['', [Validators.required]],
    });
  }
  
  moveFocus(event: any, index: number): void {
    const input = event.target;

    
    if (input.value && index < this.otoFocus.length - 1) {
      this.otoFocus[index + 1].focus();
    }

    if (event.inputType === 'deleteContentBackward' && index > 0) {
      this.otoFocus[index - 1].focus();
    }
  }

  verifyResetCode() {
    const otpInputs = Array.from(this.otoFocus);
    let resetCode = otpInputs.map((input: any) => input.value).join('');

    console.log('Reset Code -> ' + resetCode);
    this.authService.verifyResetCode(this.email, { resetCode }).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/reset-password'],{queryParams: {email:this.email}});
      },
      error: (err) => {
        console.log(err);
        this.toastService.showError(
          'error',
          'An error occurred during verifying code'
        );
      },
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);

        alert('Your OTP has expired. Please request a new one.');
        this.router.navigateByUrl('/forgot-password');
      }
    }, 1000);
  }
}
