import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { MomentService } from '../shared/services/moment.service';
import moment from 'moment';
import { DialogService } from '../shared/services/dialog.service';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrl: './memo.component.scss'
})
export class MemoComponent implements OnInit {

  griglia: { image: string; flipped: boolean; matched: boolean }[] = [];
  coppieTrovate = 0;
  primaSelezione: number | null = null;
  gameOver = false;
  nomeGiocatore?: string;
  startGioco: moment.Moment | null = null;
  endGioco: moment.Moment | null = null;
  classifica: { nome: string, time: number} [] = [];
  animalFoto = [
    'koala.jpg',
    'leone.jpg',
    'pecora.jpg',
    'pinguino.jpg',
    'pipistrello.jpg',
    'tartaruga.jpg',
    'uccello.jpg',
    'volpe.jpg',
    'koala.jpg',
    'leone.jpg',
    'pecora.jpg',
    'pinguino.jpg',
    'pipistrello.jpg',
    'tartaruga.jpg',
    'uccello.jpg',
    'volpe.jpg',
  ];

  constructor(public sharedService: SharedService, private momentService: MomentService, private dialogService: DialogService) {
    this.nomeGiocatore = this.sharedService.nome1;
  }

  ngOnInit(): void {
    this.inizioGioco();
  }

  inizioGioco() {
    this.coppieTrovate = 0;
    this.gameOver = false;
    this.primaSelezione = null;
    this.startGioco = null;
    this.endGioco = null;
    const shuffledImages = this.animalFoto.sort(() => Math.random() - 0.5); //Mescola casualmente l'array
    // INIZIALIZZARE LA GRIGLIA  
    //   if (this.cont < shuffledImages.length) {
    //     this.griglia.push({image: shuffledImages[this.cont],  flipped: false, matched: false});
    //     this.cont++ 
    // }
    this.griglia = shuffledImages.map(image => ({  //map trasforma ogni immagine in un oggetto 
      image,
      flipped: false,
      matched: false
    }));
  }

  clickGioco(i: number) {
    if (!this.startGioco) {
      this.startGioco = moment();
      console.log('Inizio gioco: ' + this.startGioco.format('DD-MM-YYYY HH:mm:ss'));
    }
    const carta = this.griglia[i];
    if (carta.flipped || carta.matched || this.gameOver) return; // Ignorare se già girata o matchata
    carta.flipped = true;
    // Se non c'è nessuna carta selezionata precedentemente (selezione è null), 
    // e si salva l'indice in modo da poterlo confrontare con la seconda carta.
    if (this.primaSelezione === null) {
      // Prima carta cliccata
      this.primaSelezione = i;
    } else {
      // Seconda carta cliccata e confronta con la prima 
      const primaCarta = this.griglia[this.primaSelezione];
      if (primaCarta.image === carta.image) {
        // Coppia trovata
        primaCarta.matched = true;
        carta.matched = true;
        this.coppieTrovate++;
        if (this.coppieTrovate === 8) {
          this.gameOver = true;
          this.endGioco = moment();
          console.log('Fine del gioco: ' + this.endGioco.format('DD-MM-YYYY HH:mm:ss'));
          console.log(this.nomeGiocatore + ' ha completato il gioco');
          const durataPartita = moment.duration(this.endGioco.diff(this.startGioco));
          console.log(durataPartita.minutes() + ' minuti ' + durataPartita.seconds() + ' secondi');
          const tempoInSecondi = durataPartita.asSeconds();
          if (this.nomeGiocatore) this.classifica.push( { nome: this.nomeGiocatore, time: tempoInSecondi});
          this.classifica.sort((a ,b) => a.time - b.time); //Ordina dal più veloce al più lento
          this.dialogService.successo('Hai completato il gioco in ' + durataPartita.minutes() + ' minuti e ' + durataPartita.seconds() + ' secondi')
        }
      } else {
        // Coppia non trovata: le carte vengono rigirate 
        setTimeout(() => {
          primaCarta.flipped = false;
          carta.flipped = false;
        }, 500);
      }
      this.primaSelezione = null; // Resetta l'indice
    }
  }
}
