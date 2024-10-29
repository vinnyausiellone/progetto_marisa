import { Component, Input, OnInit } from '@angular/core';
import { IntData } from '../esercizio2910/esercizio2910.model';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-dettaglio2910',
  templateUrl: './dettaglio2910.component.html',
  styleUrl: './dettaglio2910.component.scss'
})
export class Dettaglio2910Component implements OnInit {
  constructor(private sharedService: SharedService) { }
  datiValore?: IntData;


  ngOnInit(): void {
    const datiValore = this.sharedService.getAttUtilObj('dati');
    this.sharedService.clearAttUtilObj('dati');
    if (datiValore) this.datiValore = datiValore.dati;
    // this.datiValore = datiValore.find(valore => valore.id === this.id);
  }
}





