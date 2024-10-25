import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{


  constructor( private router: Router, private apiService: ApiService){}

  ngOnInit() {
  
    }

    clickElenco() {
      this.router.navigateByUrl('elencoDettaglio');
     }

  }
  
  

 
