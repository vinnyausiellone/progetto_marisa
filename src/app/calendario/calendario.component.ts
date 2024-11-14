import { Component, model } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss'
})
export class CalendarioComponent {
  selectedData: Date | null = null;
  minDate: Date = new Date(); // Inposta la data minima come oggi
  // isDarkMode = false;
constructor( public sharedService: SharedService) {}
  // Funzione per applicare una classe specifica ai weekend
  dateClass = (date: Date): string => {
    const day = date.getDay();
    return day === 6 || day === 0 ? 'weekend' : ''; // 6 = Sabato, 0 = Domenica
  }

  // toggleDarkMode(isDark: boolean) {
  //   this.isDarkMode = isDark;
  //   }
}
