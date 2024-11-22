import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memo-inizio',
  templateUrl: './memo-inizio.component.html',
  styleUrl: './memo-inizio.component.scss'
})
export class MemoInizioComponent {
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

  constructor(private router: Router, public sharedService: SharedService) { }

  mandaFotoAnimali() {
    this.sharedService.setAttUtilObj('fotoAnimali', this.animalFoto);
    this.router.navigateByUrl('memo');
  }

}
