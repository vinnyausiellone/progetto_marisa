import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';
import { ListaRicetta } from './ricetta.model';


@Component({
  selector: 'app-ricetta',
  templateUrl: './ricetta.component.html',
  styleUrl: './ricetta.component.scss'
})
export class RicettaComponent implements OnInit {



  constructor(private route: ActivatedRoute, private sharedService: SharedService, private router: Router) { }

  ricettaFC = new FormControl('');
  pageTitle?: string | null;
  cibiValore?: string;
  valoreRicetta?: string;
  
  @Input() isFromLista!: boolean;


  listaRicette: ListaRicetta[] = [
    { id: 'Pizza', value: 'RICETTA PIZZA' },
    { id: 'Lasagna', value: 'RICETTA LASAGNA' },
    { id: 'Tacos', value: 'RICETTA TACOS' },
    { id: 'Tortellini', value: 'RICETTA TORTELLINI' },
    { id: 'Gelato', value: 'RICETTA GELATO' },
    { id: 'Bruschetta', value: 'RICETTA BRUSCHETTA' },
    { id: 'Sushi', value: 'RICETTA SUSHI' }
  ];


  @Output() mandaRicetta: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    const cibiValore: {cibo: string} = this.sharedService.getAttUtilObj('cibi');
    if (cibiValore) this.cibiValore = cibiValore.cibo;
    if (this.cibiValore) this.pageTitle = this.cibiValore;
    this.valoreRicetta = this.listaRicette.find(ricetta => ricetta.id === this.cibiValore)?.value;
  }

  onChangeRicetta(evento: Event) {
    console.log(evento)
  }

  onSalvaRicetta() {
    this.sharedService.setAttUtilObj('ricetta', {ricetta: this.ricettaFC.value})
    this.router.navigateByUrl('lista');
  }
}
