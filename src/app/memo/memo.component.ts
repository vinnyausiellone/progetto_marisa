import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrl: './memo.component.scss'
})
export class MemoComponent implements OnInit {

  griglia: { image: string; flipped: boolean; matched: boolean }[] = [];
  coppieTrovate = 0;
  primaSelezione: number | null = null;
  secondaSelezione: number | null = null;
  gameOver = false;
  nomeGiocatore?: string;
  cont =0;

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

  constructor(public sharedService: SharedService) { 
  const giocatore = this.nomeGiocatore = this.sharedService.nome1;
  }

  ngOnInit(): void {
   this.inizioGioco();
  }

  inizioGioco() {
    this.coppieTrovate = 0;
    this.gameOver = false;
    this.primaSelezione = null;
    const shuffledImages = this.animalFoto.sort(() => Math.random() - 0.5);
  // INIZIALIZZARE LA GRIGLIA  
  //   if (this.cont < shuffledImages.length) {
  //     this.griglia.push({image: shuffledImages[this.cont],  flipped: false, matched: false});
  //     this.cont++ 
  // }
  this.griglia = shuffledImages.map(image => ({
    image,
    flipped: false,
    matched: false
  }));
}



  clickGioco(i: number) {
    if (this.griglia[i].flipped && this.griglia[i].matched) {
      this.coppieTrovate++;
      return;
    }
    this.griglia[i].flipped = true;
    
  //   if (this.primaSelezione === null) {
  //     // Selezionare la prima carta
  //     this.primaSelezione = i;
  //     } else {
  //     // Seconda selezione
  //     const primoIndex = this.primaSelezione;
  //     const primaCarta = this.griglia[primoIndex];
  //     const secondaCarta = this.griglia[i];
  //     if (primaCarta.image === secondaCarta.image) {
  //       // Match trovato
  //       primaCarta.matched = true;
  //       secondaCarta.matched = true;
  //       this.coppieTrovate++;
  //       } else {
  //       // No match
  //       primaCarta.flipped = false;
  //       secondaCarta.flipped = false; 
  // }


// }

    
   
    
  }


}

