import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tris-giocatori',
  templateUrl: './tris-giocatori.component.html',
  styleUrl: './tris-giocatori.component.scss'
})
export class TrisGiocatoriComponent {
  giocatore1 = new FormControl('');
  giocatore2 = new FormControl('');

  constructor(public sharedService: SharedService, private router: Router) {}

  inviaNomi() {
   if (this.giocatore1.value) this.sharedService.nome1 = this.giocatore1.value;
   if (this.giocatore2.value) this.sharedService.nome2 = this.giocatore2.value;
    this.router.navigateByUrl('tris');
  }

}
