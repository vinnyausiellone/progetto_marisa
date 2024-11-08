import { Component, Input } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-persona-selezionata',
  templateUrl: './persona-selezionata.component.html',
  styleUrl: './persona-selezionata.component.scss'
})
export class PersonaSelezionataComponent {

  constructor(public sharedService: SharedService){}

}
