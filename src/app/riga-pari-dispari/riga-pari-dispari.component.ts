import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-riga-pari-dispari',
  templateUrl: './riga-pari-dispari.component.html',
  styleUrl: './riga-pari-dispari.component.scss'
})
export class RigaPariDispariComponent {
  @Input() flagPari?: boolean;

}
