import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tris',
  templateUrl: './tris.component.html',
  styleUrl: './tris.component.scss'
})
export class TrisComponent {
  // Cosa abbiamo bisogno per poter giocare?
  // 1. griglia vuota
  // 2. giocatori (devono essere 2 (XO))
  // 3. Vincitore

  griglia = Array(9).fill('');
  giocatore = 'X';
  giocatore1 = new FormControl('');
  giocatore2 = new FormControl('');
  vincitore: string | null = null;
  combinazioniVincenti = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ];

  constructor(public sharedService: SharedService) { }

  // Metodo per giocare: 
  // 1. si può giocare solo se la cella è vuota e non c'è già un vincitore
  // 2. Fare prima il controllo se non c'è una vincita e poi se c'è una vincita 
  // 3. Si continua a giocare finchè non c'è una vincita o finiscono le caselle da cliccare
  // 4. Se c'è una vincita si assegna il giocatore al vincitore


  gioco(i: number) {
    if (!this.griglia[i] && !this.vincitore) {
      this.griglia[i] = this.giocatore;
      if (this.vincita()) {
        this.vincitore = this.giocatore; //se c'è un vincitore viene salvato il giocatore
      } else {
        this.giocatore = this.giocatore === 'X' ? 'O' : 'X'; //Cambiare il turno
      }
    }
    console.log('Il vincitore è ' + this.vincitore);
  }

  //Si vince se si verifica alemno una delle combinazioni vincenti (some verifica se almeno uno degli elemnti corrisponde e restituisce un booleano)
  //Si vince solo se la cella a è occupata ed è uguale alla cella b e c

  vincita(): boolean {
    return this.combinazioniVincenti.some(item => {
      const [a, b, c] = item;
      return this.griglia[a] && this.griglia[a] === this.griglia[b] && this.griglia[a] === this.griglia[c];
    });
  }

  nomiGiocatori() {
  const nome1 = this.giocatore1.value;
  const nome2 = this.giocatore2.value;
}

}
