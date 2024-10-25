import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
})
export class ListaComponent {
  selectedValue: string;
  cont = 0;

  constructor() {
    this.selectedValue = this.listaCibi[0].viewValue;
  }

  listaCibi: Food[] = [
    { value: '0', viewValue: ''}, 
    { value: '1', viewValue: 'Pizza' },
    { value: '2', viewValue: 'Bistecca' },
    { value: '3', viewValue: 'Tacos' },
  ];

  cibiDaAggiungere: Food[] = [
    { value: '4', viewValue: 'Patatine Fritte'}, 
    { value: '5', viewValue: 'Gelato' },
    { value: '6', viewValue: 'Bruschetta' },
    { value: '7', viewValue: 'Sushi' },
  ];

  aggiungiElemento() {
  if (this.cont < this.cibiDaAggiungere.length){
    this.listaCibi.push (this.cibiDaAggiungere[this.cont]);
    this.cont++
  }
  }

  eliminaElemento(){
    this.listaCibi.splice(this.listaCibi.length -1, 1);
  }

}
