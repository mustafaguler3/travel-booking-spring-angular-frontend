import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { confirmPasswordValidator } from '../validators/confirm-password';
import { ToastService } from 'src/app/shared/services/toast.service';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup | any;
  uploadedFile!:File;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private toastService: ToastService,
              private router: Router
  ){
    this.registerForm = this.fb.group({
      firstName: ["",[Validators.required]],
      lastName: ["",[Validators.required]],
      username: ["",[Validators.required]],
      email: ["",[Validators.required,Validators.email,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ["",[Validators.required,Validators.minLength(3)]],
      profilePicture: [null,[Validators.required]],
      isEnabled: [false,[Validators.required]],
      confirmPassword:["",[Validators.required]]
    },{
      validators: confirmPasswordValidator("password","confirmPassword")
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  onFileSelect(event: any){
    this.uploadedFile = event.target.files[0];
  }

  register(){
    const user = this.registerForm.value;
    this.authService.register(user, this.uploadedFile).subscribe({
      next: () => {
        this.toastService.showSuccess('Success', 'You have registered successfully. Please check your email to verify your account.');
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        this.toastService.showError('Error', `An error occurred during registration: ${error}`);
      }
    });
  }
}
