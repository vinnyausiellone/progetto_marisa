import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor( public sharedService: SharedService) {}
  // isDarkMode: boolean = false;

  // toggleDarkMode(isDark: boolean) {
  //   this.isDarkMode = isDark;
  //   }
 
}
