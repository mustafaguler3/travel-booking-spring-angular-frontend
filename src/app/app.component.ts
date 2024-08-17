import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  spinnerName = "square-jelly-box"

  constructor(private spinner: NgxSpinnerService){}

  ngOnInit(): void {
  }
}
