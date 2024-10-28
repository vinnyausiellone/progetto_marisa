import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent {
  selectedValue: string;
  cont = 0;
  cibiFC = new FormControl();
  disabled = true;
  ricettaNuova?: string;
  showCibo: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.selectedValue = this.listaCibi[0].viewValue;
  }

  listaCibi: Food[] = [
    { value: '', viewValue: '' },
    { value: 'Pizza', viewValue: 'Pizza' },
    { value: 'Lasagna', viewValue: 'Lasagna' },
    { value: 'Tacos', viewValue: 'Tacos' },
  ];

  cibiDaAggiungere: Food[] = [
    { value: 'Patatine Fritte', viewValue: 'Patatine Fritte' },
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

  mostraRicetta(cibo: Food) {
    this.router.navigateByUrl('ricetta/' + this.cibiFC.value);
  }

  mostraCibo(cibo: string) {
    this.showCibo = !this.showCibo;
  }

  testevento(event: boolean) {
    if (event) {
      console.log ('evento true')
    }
  }
}

