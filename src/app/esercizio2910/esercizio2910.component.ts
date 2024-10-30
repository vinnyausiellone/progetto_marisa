import { Component, computed, OnInit, signal } from '@angular/core';
import { IntData, Task } from './esercizio2910.model';
import { ApiService } from '../shared/services/api.service';
import { SharedService } from '../shared/services/shared.service';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-esercizio2910',
  templateUrl: './esercizio2910.component.html',
  styleUrl: './esercizio2910.component.scss'
})
export class Esercizio2910Component implements OnInit {


  constructor(private apiService: ApiService, private sharedService: SharedService, private matSnackBar: MatSnackBar) { }

  data?: IntData[];
  showDettaglio: boolean = false;
  idRigaSelezionata?: number;
  datiFiltrati?: IntData[];
  showTabellaFiltrata: boolean = false;
  titleFC = new FormControl();
  bodyFC = new FormControl();
  selectedUserId: number = 0;
  showNuovaRiga: boolean = false;
  checkboxFC: FormControl[] = []; // questa lista verrà popolata quando viene popolata la tabella


  ngOnInit(): void {
    this.getData();

  }

  getData() {
    this.apiService.getData().subscribe(res => {
      this.data = res;
      this.data.forEach(x => {
        this.checkboxFC.push(new FormControl());
      })
    })
  }

  onOpenDettaglio(item: IntData) {
    this.showDettaglio = !this.showDettaglio;
    this.idRigaSelezionata = this.idRigaSelezionata === item.id ? undefined : item.id;
    if (this.data) this.sharedService.setAttUtilObj('dati', { dati: item });
  }

  onClickChip(numeroChip: number) {
    this.datiFiltrati = this.data?.filter(item => item.userId === numeroChip);
    this.showTabellaFiltrata = true;
    this.selectedUserId = numeroChip;
  }

  showTabellaCompleta() {
    this.showTabellaFiltrata = false;
  }

  onInserireNuovaRiga() {
    this.showNuovaRiga = true;
  }

  onAnnulla() {
    this.showNuovaRiga = false;
  }

  // METODO CHIAMATA POST CHE PRENDE I DATI INSERITI IN INPUT 
  onSalva() {
    const req: IntData = {
      userId: this.selectedUserId,
      title: this.titleFC.value,
      body: this.bodyFC.value,
    }
    this.apiService.postData(req).subscribe(res => {
      console.log('response', res)
      this.matSnackBar.open('Operazione eseguita correttamente', 'Close');
    })
  }

  onDialog() {
    
  }

}

