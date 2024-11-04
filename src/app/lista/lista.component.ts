import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent implements OnInit {
  selectedValue: string;
  cont = 0;
  cibiFC = new FormControl();
  disabled = true;
  ricettaNuova?: string;
  showCibo: boolean = false;
  showTest: boolean = false;
  mostraTab: boolean = false;
  ricettaSalvata?: string;

  constructor(private route: ActivatedRoute, private router: Router, private sharedService: SharedService) {
    this.selectedValue = this.listaCibi[0].viewValue;
  }
  ngOnInit(): void {
    const ricettaSalvata: { ricetta: string } = this.sharedService.getAttUtilObj('ricetta');
    this.sharedService.clearAttUtilObj('ricetta');
    if (ricettaSalvata) this.ricettaSalvata = ricettaSalvata.ricetta;

  }

  listaCibi: Food[] = [
    { value: '', viewValue: '' },
    { value: 'Pizza', viewValue: 'Pizza' },
    { value: 'Lasagna', viewValue: 'Lasagna' },
    { value: 'Tacos', viewValue: 'Tacos' },
  ];

  cibiDaAggiungere: Food[] = [
    { value: 'Tortellini', viewValue: 'Tortellini' },
    { value: 'Gelato', viewValue: 'Gelato' },
    { value: 'Bruschetta', viewValue: 'Bruschetta' },
    { value: 'Sushi', viewValue: 'Sushi' },
  ];

  aggiungiElemento() {
    if (this.cont < this.cibiDaAggiungere.length) {
      this.listaCibi.push(this.cibiDaAggiungere[this.cont]);
      this.cont++
    }
  }

  eliminaElemento() {
    this.listaCibi.splice(this.listaCibi.length - 1, 1);
  }

  mostraRicetta() {
    this.sharedService.setAttUtilObj('cibi', { cibo: this.cibiFC.value });
    this.router.navigateByUrl('ricetta');
  }

  mostraCibo(cibo: string) {
    this.showCibo = !this.showCibo;
  }

  testevento(event: boolean) {
    if (event) {
      this.showTest = true;
    }
  }

  bottoneIndietro() {
    window.history.back();
  }


}


