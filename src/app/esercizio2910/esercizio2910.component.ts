import { Component, computed, OnInit, signal } from '@angular/core';
import { IntData, Task } from './esercizio2910.model';
import { ApiService } from '../shared/services/api.service';
import { SharedService } from '../shared/services/shared.service';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from '../shared/services/dialog.service';

@Component({
  selector: 'app-esercizio2910',
  templateUrl: './esercizio2910.component.html',
  styleUrl: './esercizio2910.component.scss'
})
export class Esercizio2910Component implements OnInit {


  constructor(private apiService: ApiService, private sharedService: SharedService, private matSnackBar: MatSnackBar, private dialogService: DialogService) { }

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
    this.showDettaglio = true;
    this.idRigaSelezionata = item.id;
    if (this.data) {
      this.sharedService.setAttUtilObj('dati', item);
    }
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

  chiudiDettaglio() {
    this.showDettaglio = !this.showDettaglio;
  }
 

  // METODO CHIAMATA POST CHE PRENDE I DATI INSERITI IN INPUT 
  onSalva() {
    const req: IntData = {
      userId: this.selectedUserId,
      title: this.titleFC.value,
      body: this.bodyFC.value,
      selected: false,
    }
    this.apiService.postData(req).subscribe(res => {
      console.log('response', res)
      this.matSnackBar.open('Operazione eseguita correttamente', 'Close');
    })
  }

  invioBtn() {
    const someSelected = this.data?.filter(item => item.selected);
    let idSelected: number[] = [];
    if (someSelected && someSelected.length > 0) {
      someSelected.forEach((element: IntData) => {    //dobbiamo dare il tipo
        idSelected.push(element.id!);      //il punto eslamativo dice che esistera' per forza
      });
      this.dialogService.successo('Invio riga con id ' + idSelected.join(', ') + ' avvenuto con successo')
    } else {
      this.dialogService.errore('Selezionare almeno una riga')
    }
  }

  checkedAll(event: any) {
    console.log(event);
    this.data?.forEach(element => {
      if (!event.checked) {
        element.selected = false;
      } else {
        element.selected = true;
      }
      // element.selected = !element.selected;
    });
  }

  checkedRow(riga: any) {
    riga.selected = !riga.selected;
  }

  //PER FARE USCIRE LA V, TUTTE SELEZIONATE
  checked() {
    const allSelected = this.data?.every(item => item.selected);
    if (allSelected) {
      return true;
    } else {
      return false;
    }
  }
  //CONTROLLO PER VEDERE SE ALMENO UNO E' SELEZIONATO
  someChecked() {
    const someSelected = this.data?.filter(item => item.selected);
    const allSelected = this.data?.every(item => item.selected);
    if (someSelected && someSelected.length > 0 && !allSelected) {
      return true;
    } else {
      return false;
    }
  }


}

