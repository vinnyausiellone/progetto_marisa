import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { IntAnagraficaDettaglio } from '../anagrafica-utente/anagrafica-utente.model';


@Component({
  selector: 'app-anagrafica-dettaglio',
  templateUrl: './anagrafica-dettaglio.component.html',
  styleUrl: './anagrafica-dettaglio.component.scss'
})
export class AnagraficaDettaglioComponent implements OnInit {
  titoloDettagli = 'Dettaglio Utente';
  darkmode = false;
  listaCibi = ['Pizza', 'Parmigiana di melanzane', 'Pasta panna e salmone'];
  listaCibiOdiati = ['Cetrioli', 'Spinaci', 'Broccoli'];
  mostraCibi = true;
  bottoneAttivo = true;
  id?: any;
  anagraficaDettaglio?: IntAnagraficaDettaglio[];
  @Output() clickEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() persona?: {nome:string; cognome: string};

  constructor(private route: ActivatedRoute, private apiService: ApiService){}
  
  cambiaLista () {
    this.mostraCibi = !this.mostraCibi;
    this.clickEvent.emit(true); 
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAnagraficaById(this.id);
  }

  modalitaDark() {
    this.darkmode = !this.darkmode;
    if (this.darkmode) {
      document.body.classList.add ('dark-mode');
    } else {
      document.body.classList.remove ('dark-mode');
    }
  }

  bottoneIndietro() {
    window.history.back();
  }

  disattivaBottoni() {
    this.bottoneAttivo = !this.bottoneAttivo;
  }

  getAnagraficaById(id: any) {
    this.apiService.getAnagraficaById(id).subscribe(res => {
      this.anagraficaDettaglio = res;
    })
  }



}

