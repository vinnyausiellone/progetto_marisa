import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { FormControl, Validators } from '@angular/forms';
import { DialogService } from '../shared/services/dialog.service';
import { SharedService } from '../shared/services/shared.service';



class Persona {
  nome: string;
  cognome: string;
  flagedit: boolean;
  isDettaglio: boolean;

  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.flagedit = true;
    this.isDettaglio = false;
  }
}

@Component({
  selector: 'app-anagrafica-utente',
  templateUrl: './anagrafica-utente.component.html',
  styleUrls: ['./anagrafica-utente.component.scss']
})
export class AnagraficaUtenteComponent implements OnInit {

  titoloTabella: string = 'ANAGRAFICA UTENTI';
  riga1col2 = 'Rossi';
  showRiga4 = false;
  riga4col1 = 'Mario';
  riga4col2 = 'Rossi';
  cambioColore = false;
  mostraDettaglio = false;
  // anagraficaOggetto?: IntAnagrafica;
  idPresente = false;
  id?: any;
  mostraInput: boolean[] = [];
  clickDettaglio = false;
  nuovaRiga = false;
  personaSelezionata?: { nome: string; cognome: string };
  personaClick = false;
  listaNomeFC: FormControl[] = [];
  idValore = false;
  flagPari: boolean = false;
  listaNomi: Persona[] = [new Persona('Marisa', 'Rossi'), new Persona('Giulia', 'Verdi'), new Persona('Maria', 'Giallo')];
  listaPersoneNuove: Persona[] = [new Persona('Isabelle', 'Haak'), new Persona('Marina', 'Lubian'), new Persona('Monica', 'De Gennaro'), new Persona('Sarah', 'Fahr'), new Persona('Cristina', 'Chirichella'), new Persona('Daniele', 'Sanatarelli'), new Persona('Marco', 'Fantasia')];
  count = 4;
  idTabella?: number;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService, private dialogService: DialogService, private sharedService: SharedService) { }

  ngOnInit(): void {
    // this.getAnagrafica();
    this.listaNomi.forEach(res => {
      this.listaNomeFC.push(new FormControl(res.nome));
    })
  }

  mostraNuovaRigaTabella() {
    if (this.count < 12) {
      this.listaNomi.push(this.listaPersoneNuove[this.count - 4]);
      this.count++
    }
  }

  cambiaColore() {
    this.cambioColore = !this.cambioColore;
  }

  goToDettaglio(i: number) {
    this.router.navigateByUrl('anagraficaDettaglio/' + i);
  }

  mostraDettaglioMetodo() {
    this.mostraDettaglio = !this.mostraDettaglio
  }

  clickEvento(item: Persona, i: number) {
    this.flagPari = (i + 1) % 2 === 0 ? true : false;
    this.listaNomi.forEach(res => {
      if (res.isDettaglio) {
        res.isDettaglio = false;
      }
    })
    item.isDettaglio = true;
    this.clickDettaglio = true;
  }

  closeDettaglio(item: Persona) {
    item.isDettaglio = false;
    this.clickDettaglio = false;
  }

  // getAnagrafica() {
  //   this.apiService.getAnagrafica().subscribe(res => {
  //     this.anagraficaOggetto = res;
  //   })
  // }

  aggiungiCeck(item: Persona, index: number) {
    item.flagedit = false;
  }

  rimuoviInput(persona: Persona, index: number) {
    if (!this.listaNomeFC[index].value) {
      this.dialogService.errore('Campo vuoto')
    } else {
      this.listaNomi.forEach(x => {
        if (x.nome === persona.nome) {
          x.nome = this.listaNomeFC[index].value;
        }
      })
      persona.flagedit = true;
    }
  }

  annullaInput(persona: Persona, index: number) {
    if (!this.listaNomeFC[index].value || this.listaNomeFC[index].value) {
    persona.flagedit = true;
    }
  }

  selezionaPersone(persona: Persona) {
    // this.personaClick = !this.personaClick;
    // this.personaSelezionata = persona;
    this.sharedService.setAttUtilObj('personaSel', {nome: persona.nome, cognome: persona.cognome})
    this.router.navigateByUrl('personaSelezionata');
  }

  getClickEvent(evento: boolean) {
    this.nuovaRiga = !this.nuovaRiga;
  }

  selezionaRigaTemplate() {
    this.idValore = !this.idValore;
  }


}



