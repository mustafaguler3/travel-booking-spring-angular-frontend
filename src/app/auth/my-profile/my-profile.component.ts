import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit{

  currentUser:any

  constructor(private authService: AuthService){
    this.currentUser = this.authService.getCurrentUserValue()
  }

  ngOnInit(): void {
      
  }

}
