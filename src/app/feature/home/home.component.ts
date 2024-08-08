import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  selectedTab: string = 'flights';
  
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
