import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  darkValue = false;

  @Input() isDarkMode = false;
  @Output() darkModeToggle = new EventEmitter<boolean>();

  constructor(private router: Router, private apiService: ApiService, private sharedService: SharedService) { }

  ngOnInit() {

  }

  clickElenco() {
    this.router.navigateByUrl('elencoDettaglio');
  }

  toggleDarkMode(isDark: boolean) {
    this.darkModeToggle.emit(isDark);
    this.darkValue = isDark;
    this.sharedService.setAttUtilObj('valoreToggle', isDark);
    }
    
}




