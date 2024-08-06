import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { User } from 'src/app/shared/models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm: any;
  user!: User
  error = "";

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastService:ToastService
  ){
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required,Validators.minLength(3)]]
    });
  }

  get f(){
    return this.loginForm.controls
  }

  login(){
    if(this.loginForm.valid){
      console.log("Form Values: ", this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log(res)
          this.router.navigate(["/home"])
        },
        error : err => {
          this.error = err
          console.log(err)
        }
      }
      )
    }
  }

}
