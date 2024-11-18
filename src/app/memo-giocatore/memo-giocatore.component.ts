import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '../shared/services/dialog.service';

@Component({
  selector: 'app-memo-giocatore',
  templateUrl: './memo-giocatore.component.html',
  styleUrl: './memo-giocatore.component.scss'
})
export class MemoGiocatoreComponent {
  giocatore = new FormControl('');

  constructor(public sharedService: SharedService,  private router: Router, private dialogService: DialogService) {}

  inviaNome() {
    if (!this.giocatore.value) {
      this.dialogService.errore('Inserire il nome del giocatore per poter giocare')
    } else {
      if (this.giocatore.value) this.sharedService.nome1 = this.giocatore.value;
      this.router.navigateByUrl('memo');
    }
  }

}
