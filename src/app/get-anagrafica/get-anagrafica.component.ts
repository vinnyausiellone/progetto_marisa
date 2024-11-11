import { Component, OnInit } from '@angular/core';
import { IntAnagrafica } from '../anagrafica-utente/anagrafica-utente.model';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-get-anagrafica',
  templateUrl: './get-anagrafica.component.html',
  styleUrl: './get-anagrafica.component.scss'
})
export class GetAnagraficaComponent implements OnInit {
  anagraficaOggetto?: IntAnagrafica;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.getAnagrafica(); 
  }

  getAnagrafica() {
    this.apiService.getAnagrafica().subscribe(res => {
      this.anagraficaOggetto = res;
    })
  }

}
