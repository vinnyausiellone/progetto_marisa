import { Component, OnInit } from '@angular/core';
import { IntData } from './esercizio2910.model';
import { ApiService } from '../shared/services/api.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-esercizio2910',
  templateUrl: './esercizio2910.component.html',
  styleUrl: './esercizio2910.component.scss'
})
export class Esercizio2910Component implements OnInit{

  constructor (private apiService: ApiService, private sharedService: SharedService){}
  
  data?: IntData[];
  showDettaglio: boolean = false;
  
  ngOnInit(): void {
    this.getData();
  }

  getData() {
   this.apiService.getData().subscribe(res =>{
    this.data = res;
   }) 
  }
  onOpenDettaglio(item: IntData) {
    this.showDettaglio = !this.showDettaglio;
    if (this.data) this.sharedService.setAttUtilObj('dati', {dati: item});
  }

}
