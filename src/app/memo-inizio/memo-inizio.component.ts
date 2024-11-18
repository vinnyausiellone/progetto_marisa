import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-memo-inizio',
  templateUrl: './memo-inizio.component.html',
  styleUrl: './memo-inizio.component.scss'
})
export class MemoInizioComponent {

  constructor(public sharedService: SharedService) {}

}
