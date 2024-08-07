import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  currentUser!: User

  constructor(private authService: AuthService,
              private router:Router
  ){
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user ? this.authService.getCurrentUserValue() : null
    })
    this.currentUser = this.authService.getCurrentUserValue()
  }

  getProfilePictureUrl(): string {
    if (this.currentUser && this.currentUser.profilePictureUrl) {
      return this.authService.getProfilePicture(this.currentUser,"users");
    }
    return '/assets/images/nouser.png'; // or a default avatar image path
  }

  logout(){
    this.authService.logout()
    this.router.navigateByUrl("/login")
  }

  getProfile(){
    this.authService.profile().subscribe({
      next: (res) => {
        console.log("response => "+ res)
        this.currentUser = res;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
