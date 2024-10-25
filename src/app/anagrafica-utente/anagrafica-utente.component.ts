import { Component, input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { IntAnagrafica } from './anagrafica-utente.model';
import { FormControl } from '@angular/forms';



class Persona {
  nome: string;
  cognome: string;
  flagedit: boolean;
  isDettaglio: boolean;

  constructor (nome: string, cognome:string){
    this.nome =nome;
    this.cognome=cognome;
    this.flagedit = true;
    this.isDettaglio = false;
  }
}

@Component({
  selector: 'app-anagrafica-utente',
  templateUrl: './anagrafica-utente.component.html',
  styleUrls: ['./anagrafica-utente.component.scss']
})
export class AnagraficaUtenteComponent implements OnInit{
  
  titoloTabella: string = 'Anagrafica Utenti';
  riga1col2 = 'Rossi';
  showRiga4 = false;
  riga4col1 = 'Mario';
  riga4col2 = 'Rossi';
  cambioColore = false;
  mostraDettaglio = false;
  anagraficaOggetto?: IntAnagrafica;
  idPresente = false;
  id?:any;
  nomeForm = new FormControl('');
  mostraInput:  boolean[] = [];
  clickDettaglio = false;
  nuovaRiga = false;
  personaSelezionata?: {nome: string; cognome: string};
  personaClick = false;


  listaNomi: Persona[] =  [new Persona('Marisa', 'Rossi'), new Persona('Giulia', 'Verdi'), new Persona('Maria', 'Giallo') ];
  
  constructor (private route: ActivatedRoute, private router: Router, private apiService: ApiService){}

  ngOnInit(): void {
    this.getAnagrafica();
  }

   mostra4Riga() {
    this.listaNomi.push (new Persona('Paola', 'Lubian'));
   }

   cambiaColore() {
    this.cambioColore = !this.cambioColore;
   }

   goToDettaglio(i: number) {
    this.router.navigateByUrl('anagraficaDettaglio/' + i);
   }

   mostraDettaglioMetodo() {
    this.mostraDettaglio=!this.mostraDettaglio
    }

    clickEvento(item: Persona){
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

  getAnagrafica() {
    this.apiService.getAnagrafica().subscribe(res => {
      this.anagraficaOggetto = res;
    })
  }

  aggiungiCeck(item: Persona) {
    item.flagedit = false;
  }

   rimuoviInput(item: Persona) {
    if (!item.nome){
      alert ("Il campo è vuoto");
    } else {
      item.flagedit = true;
    }
   }

   selezionaPersone(persona: {nome: string; cognome: string}){
    this.personaClick = !this.personaClick;
    this.personaSelezionata =persona;
   }

   getClickEvent (evento: boolean){
   this.nuovaRiga = !this.nuovaRiga;
   }



    }   
   
   

  