import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ricetta',
  templateUrl: './ricetta.component.html',
  styleUrl: './ricetta.component.scss'
})
export class RicettaComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }

  ricettaFC = new FormControl('');
  pageTitle?: string | null;

  @Output() mandaRicetta: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.pageTitle = this.route.snapshot.paramMap.get('value');
  }

  onChangeRicetta(evento: Event) {
    console.log(evento)
  }

  onSalvaRicetta() {
    this.mandaRicetta.emit(this.ricettaFC.value as string)
  }
}
