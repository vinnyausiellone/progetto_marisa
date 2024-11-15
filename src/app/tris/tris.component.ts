import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tris',
  templateUrl: './tris.component.html',
  styleUrl: './tris.component.scss'
})
export class TrisComponent implements OnInit{
 // Cosa abbiamo bisogno per poter giocare?
  // 1. griglia vuota
  // 2. giocatori (devono essere 2 (XO))
  // 3. Vincitore

  griglia = Array(9).fill('');
  nomeGiocatore1?: string;
  nomeGiocatore2?: string;
  giocatore: string = '';
  vincitore: string | null = null;
  combinazioniVincenti = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ];

  constructor(public sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.nomeGiocatore1 = this.sharedService.nome1;
    this.nomeGiocatore2 = this.sharedService.nome2;
    if (this.nomeGiocatore1) this.giocatore = this.nomeGiocatore1;
  }

  // Metodo per giocare: 
  // 1. si può giocare solo se la cella è vuota e non c'è già un vincitore
  // 2. Si deve assegnare il simbolo al giocatore, se la cella è vuota e non c'è una vincita
  // 3. Si deve fare il controlla sulla vincita dopo ogni mossa, se c'è un vincitore il gioco si interrompe
  // 4. Se c'è una vincita si assegna il giocatore al vincitore


  gioco(i: number) {
    if (this.griglia[i] === '' && !this.vincitore) {
      this.griglia[i] = this.giocatore === this.nomeGiocatore1 ? 'X' : 'O';
      this.vincita();
      if (this.nomeGiocatore1 && this.nomeGiocatore2) this.giocatore = this.giocatore === this.nomeGiocatore1 ? this.nomeGiocatore2 : this.nomeGiocatore1;
      console.log('Il vincitore è ' + this.vincitore);
    }
  }

  //Verificare se c'è un vincitore o se la partita è finita in pareggio
  //Ciclare su tutte le combinazioni possibili per vedere se contengono lo stesso valore o sono vuote
  // se la combinazione dell'if è vera vuol dire che il giocatore che ha messo quel simbolo è il vincitore
  //void perchè non restituisce esplicitamente un valore ma modifica il vincitore che poi viene mostrato in html per mostrare il risultato

  vincita(): void {
    for (let combinazioni of this.combinazioniVincenti) {
      const [a, b, c] = combinazioni;
      if (this.griglia[a] && this.griglia[a] === this.griglia[b] && this.griglia[a] === this.griglia[c]) {
        if (this.nomeGiocatore1 && this.nomeGiocatore2) this.vincitore = this.griglia[a] === 'X' ? this.nomeGiocatore1 : this.nomeGiocatore2;
        return;
      }
    }
    //SE LA GRIGLIA E' PIENA E NON C'E' UN VINCITORE
    if (!this.griglia.includes('')) {
      this.vincitore = 'Pareggio';
    }
  }

}
