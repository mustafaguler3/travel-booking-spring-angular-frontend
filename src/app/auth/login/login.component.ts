import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { User } from 'src/app/shared/models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm: any;
  user!: User
  error = "";
  loading = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private spinner: NgxSpinnerService
  ){
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.minLength(3)]]
    });

    this.spinner.show()

      setTimeout(() => {
        this.spinner.hide();
      },1000)
  }

  get f(){
    return this.loginForm.controls
  }

  login(){
    if(this.loginForm.valid){
      this.loading = true;
      console.log("Form Values: ", this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log("Response => "+ JSON.stringify(res))
          this.loading = false;
          this.router.navigate(["/home"])
        },
        error : err => {
          console.log("Error => "+err)
          this.loading = false;
        }
      }
      )
    }
  }
}
