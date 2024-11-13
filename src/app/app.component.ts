import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/services/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'projectName';
  // getValoreDark: boolean = false;
  isDarkMode = false;

  constructor(private sharedService: SharedService) {}
  
  ngOnInit(): void {

  }

  toggleDarkMode(isDark: boolean) {
    this.isDarkMode = isDark;
    }

//   cambioValoreDark(nuovoValore: boolean) {
//     this.getValoreDark = nuovoValore;
//     if (this.getValoreDark) {
//       document.body.classList.add('dark-mode');
//     } else {
//       document.body.classList.remove('dark-mode');
//     }
//   }
// 
}
