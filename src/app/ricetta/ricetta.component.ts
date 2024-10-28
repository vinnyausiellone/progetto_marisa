import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-ricetta',
  templateUrl: './ricetta.component.html',
  styleUrl: './ricetta.component.scss'
})
export class RicettaComponent implements OnInit {
  


  constructor(private route: ActivatedRoute, private sharedService: SharedService) { }

  ricettaFC = new FormControl('');
  pageTitle?: string | null;
  

  @Output() mandaRicetta: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    const cibiValore = this.sharedService.getAttUtilObj('cibi')
    this.pageTitle = cibiValore;
  }

  onChangeRicetta(evento: Event) {
    console.log(evento)
  }

  onSalvaRicetta() {
    this.mandaRicetta.emit(this.ricettaFC.value as string)
  }
}
