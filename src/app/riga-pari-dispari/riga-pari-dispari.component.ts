import { Component, Input } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-riga-pari-dispari',
  templateUrl: './riga-pari-dispari.component.html',
  styleUrl: './riga-pari-dispari.component.scss'
})
export class RigaPariDispariComponent {
  @Input() flagPari?: boolean;

  constructor( public sharedService: SharedService) {}

}
