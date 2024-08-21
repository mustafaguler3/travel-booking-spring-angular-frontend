import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { confirmPasswordValidator } from '../validators/confirm-password';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit{

  resetForm:any
  email: any

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private route:ActivatedRoute,
              private toastService: ToastService,
              private router: Router
  ){}


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.email = params['email']
    })

      this.resetForm = this.fb.group({
        newPassword: ["",[Validators.required]],
        confirmPassword: ["",[Validators.required]]
      },{
        validators: confirmPasswordValidator("newPassword","confirmPassword")
  })
  }

  get f(){
    return this.resetForm.controls
  }

  resetPassword(){
    this.authService.resetPassword(this.email,this.resetForm.value)
    .subscribe({
      next: (response) => {
        console.log(response)
        this.toastService.showSuccess("success","Your password has been updated")
        this.router.navigateByUrl("/login")
      },
      error: (err) => {
        console.log(err)
        this.toastService.showError("error","Your password has not been updated")
      }
    })
  }
}
