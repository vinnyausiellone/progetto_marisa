import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { IntAnagraficaDettaglio } from '../anagrafica-utente/anagrafica-utente.model';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared/services/shared.service';


@Component({
  selector: 'app-anagrafica-dettaglio',
  templateUrl: './anagrafica-dettaglio.component.html',
  styleUrl: './anagrafica-dettaglio.component.scss'
})
export class AnagraficaDettaglioComponent implements OnInit {
  titoloDettagli = 'DETTAGLIO UTENTE';
  darkmode = false;
  listaCibi = ['Pizza', 'Parmigiana di melanzane', 'Pasta panna e salmone'];
  listaCibiOdiati = ['Cetrioli', 'Spinaci', 'Broccoli'];
  mostraCibi = true;
  bottoneAttivo = true;
  id?: any;
  anagraficaDettaglio?: IntAnagraficaDettaglio[];
  showCibiPreferiti?: boolean;
  showCibiOdiati?: boolean;
  showAll?: boolean;
 

  @Output() clickEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() persona?: { nome: string; cognome: string };
  @Input() mostraBottoni: boolean = true;

  constructor(private route: ActivatedRoute, private apiService: ApiService, public sharedService: SharedService) { }
  

  cambiaLista() {
    this.mostraCibi = !this.mostraCibi;
    this.clickEvent.emit(true);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAnagraficaById(this.id);
    }

  modalitaDark() {
      this.darkmode = !this.darkmode;
      if(this.darkmode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
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

  mostraCibiPreferiti() {
    this.showCibiPreferiti = true;
    this.showCibiOdiati = false
    this.showAll = false;
  }

  mostraCibiOdiati() {
    this.showCibiOdiati = true;
    this.showAll = false;
    this.showCibiPreferiti = false;
  }

  mostraEntrambi() {
    this.showAll = true;
    this.showCibiOdiati = false;
    this.showCibiPreferiti = false;
  }



}

