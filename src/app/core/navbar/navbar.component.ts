import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  currentUser!: User;
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  constructor(private authService: AuthService,
              private router: Router
  ){
  }
  ngOnInit(): void {
      this.authService.currentUser.subscribe(user => {
        this.currentUser = user ? this.authService.getCurrentUserValue() : null
      })
      this.currentUser = this.authService.getCurrentUserValue()
      console.log(this.currentUser.firstName)
  }
  
  getProfilePictureUrl(): string {
    if (this.currentUser && this.currentUser.profilePictureUrl) {
      return this.authService.getProfilePicture(this.currentUser,"users");
    }
    return '/assets/images/nouser.png'; // or a default avatar image path
  }
  logout(){
    this.authService.logout()
    this.router.navigate(["/login"])
  }
  onSearch() {
    // Arama işlemlerini burada uygulayın
    alert('Search button clicked!');
  }
}