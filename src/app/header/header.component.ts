import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  darkValue = false;

  @Input() isDarkMode = false;
  @Output() darkModeToggle = new EventEmitter<boolean>();

  constructor(private router: Router, private sharedService: SharedService) { }


  clickElenco() {
    this.router.navigateByUrl('elencoDettaglio');
  }

  toggleDarkMode(isDark: boolean) {
    this.darkModeToggle.emit(isDark);
    this.darkValue = isDark;
    this.sharedService.toggle = isDark;
    }
    
}




