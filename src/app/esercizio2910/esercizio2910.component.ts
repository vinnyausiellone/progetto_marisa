import { Component, OnInit } from '@angular/core';
import { IntData } from './esercizio2910.model';
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

  data?: IntData[];
  showDettaglio: boolean = false;
  idRigaSelezionata?: number;
  datiFiltrati?: IntData[];
  showTabellaFiltrata: boolean = false;
  titleFC: FormControl[] = [];
  bodyFC: FormControl[] = [];
  selectedUserId: number = 0;
  showNuovaRiga: boolean = false;
  checkboxFC: FormControl[] = []; // questa lista verrà popolata quando viene popolata la tabella
  getValoreToggle: boolean = false;
  mostraInput: boolean = false;
  isActive: boolean = false;
  onChangeRighe: boolean = false;
  chipIndex: number | null = null;
  // getValoreToggleFromSharedService: any;
  chips = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  datiFiltratiTitle: string[] = [];
  datiFiltratiBody: string[] = [];

  constructor(private apiService: ApiService, public sharedService: SharedService, private matSnackBar: MatSnackBar, private dialogService: DialogService) {
  //  this.getValoreToggleFromSharedService = this.sharedService.getAttUtilObj('valoreToggle')
   }


  ngOnInit(): void {
    this.getData();
  }

  cambioValoreToggle(nuovoValore: boolean) {
    this.getValoreToggle = nuovoValore;
  }

  getData() {
    this.apiService.getData().subscribe(res => {
      this.data = res;
      this.data.forEach(x => {
        this.checkboxFC.push(new FormControl());
        this.datiFiltratiTitle.push(x.title);
        this.datiFiltratiBody.push(x.body);
      })
      if (this.datiFiltratiTitle) {
        this.datiFiltratiTitle.forEach(res => {
          this.titleFC.push(new FormControl(res));
        })
      }
      if (this.datiFiltratiBody) {
        this.datiFiltratiBody.forEach(res => {
          this.bodyFC.push(new FormControl(res));
        })
      }
    })
  }

  onOpenDettaglio(item: IntData) {
    this.showDettaglio = true;
    this.idRigaSelezionata = item.id;
    if (this.data) {
      this.sharedService.setAttUtilObj('dati', item);
    }
  }

  onSaveRiga(item: IntData, index: number) { 
    const req: IntData = {
      id: item.id,
      userId: this.selectedUserId,
      title: this.titleFC[index].value ? this.titleFC[index].value : '',
      body: this.bodyFC[index].value ? this.bodyFC[index].value : ''
    }
    this.apiService.modificaData(req).subscribe(res => {
      this.data?.forEach(x => {
        if (item.id === res.id) {
          item.title = res.title;
          item.body = res.body;
          item.selected = false;
        }
      })
      this.onChangeRighe = false;
      this.matSnackBar.open('Operazione eseguita correttamente', 'Close');
    })
    this.titleFC[index].reset();
    this.bodyFC[index].reset();
  }

  onClickChip(numeroChip: number, index: number) {
    this.datiFiltrati = this.data?.filter(item => item.userId === numeroChip);
    this.showTabellaFiltrata = true;
    this.selectedUserId = numeroChip;
    this.chipIndex = index;
  }

  showTabellaCompleta() {
    this.chipIndex = null;
    this.showTabellaFiltrata = false;
  }

  onInserireNuovaRiga() {
    this.showNuovaRiga = true;
  }

  onAnnulla() {
    this.showNuovaRiga = false;
  }

  chiudiDettaglio() {
    this.showDettaglio = false;
  }


  // METODO CHIAMATA POST CHE PRENDE I DATI INSERITI IN INPUT 
  onSalva(index: number) {
    const req: IntData = {
      userId: this.selectedUserId,
      title: this.titleFC[index].value,
      body: this.bodyFC[index].value,
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

  bottoneIndietro() {
    window.history.back();
  }

  modificaRiga(value: boolean, index: number) {
    if (value) {
      this.onChangeRighe = true;
    } else {
      this.onChangeRighe = false;
    }
  }
}