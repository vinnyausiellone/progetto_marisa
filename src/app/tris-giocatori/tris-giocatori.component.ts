import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '../shared/services/dialog.service';

@Component({
  selector: 'app-tris-giocatori',
  templateUrl: './tris-giocatori.component.html',
  styleUrl: './tris-giocatori.component.scss'
})
export class TrisGiocatoriComponent {
  giocatore1 = new FormControl('');
  giocatore2 = new FormControl('');

  constructor(public sharedService: SharedService, private router: Router, private dialogService: DialogService) { }

  inviaNomi() {
    if (!this.giocatore1.value && !this.giocatore2.value) {
      this.dialogService.errore('Inserire i nomi dei giocatori per poter giocare')
    } else if (this.giocatore1.value === this.giocatore2.value) {
      this.dialogService.errore('Non ci possono essere due giocatori con lo stesso nome')
    } else if (!this.giocatore1.value && this.giocatore2.value) {
      this.dialogService.errore('Inserire il nome del primo giocatore per poter giocare')
    } else if (this.giocatore1.value && !this.giocatore2.value) {
      this.dialogService.errore('Inserire il nome del secondo giocatore per poter giocare')
    } else {
      if (this.giocatore1.value) this.sharedService.nome1 = this.giocatore1.value;
      if (this.giocatore2.value) this.sharedService.nome2 = this.giocatore2.value;
      this.router.navigateByUrl('tris');
    }
  }

}
