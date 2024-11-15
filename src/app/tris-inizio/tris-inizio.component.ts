import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-tris-inizio',
  templateUrl: './tris-inizio.component.html',
  styleUrl: './tris-inizio.component.scss'
})
export class TrisInizioComponent {

  constructor(public sharedService: SharedService) {}
}
