import { Component, OnInit } from '@angular/core';
import { DialogService } from '../shared/services/dialog.service';
import { SharedService } from '../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memo-impostazioni',
  templateUrl: './memo-impostazioni.component.html',
  styleUrl: './memo-impostazioni.component.scss'
})
export class MemoImpostazioniComponent implements OnInit{
  arrayFoto: File[] = [];

  constructor(public sharedService: SharedService, private router: Router, private dialogService: DialogService) {
   }
  ngOnInit(): void {
  }

  // onFileChange(event: any): void {
  //   this.file = event.target.files[0];
  //   if (this.file && this.arrayFoto.length <8){ this.arrayFoto.push(this.file)
  //     console.log(this.arrayFoto);
  //   } else  {
  //         this.dialogService.errore('Puoi caricare un massimo di 8 foto')
  //         return;
  //   }
  //     }

  onFileChange(event: any): void {
    const files = event.target.files;
    if (files.length === 0) {
      return;
    }
    for (let i = 0; i < files.length; i++) {
      if (this.arrayFoto.length < 8 && this.sharedService.arrayFotoBackup.length < 8) {
        this.arrayFoto.push(files[i]);
        this.sharedService.arrayFotoBackup.push(files[i]);
      } else {
        this.dialogService.errore('Puoi caricare un massimo di 8 foto');
        break;
      }
    }
    console.log(this.arrayFoto);
  }

  onUpload() {
    const arrayFotoNome = this.arrayFoto.map(x => x.name);
    const doppioni = arrayFotoNome.flatMap(y => [y, y]); //Nuova lista con le foto duplicate
    this.sharedService.setAttUtilObj('nomiFotoPersonalizzate', doppioni);
    if (doppioni.length < 16) {
      this.dialogService.errore('Devi caricare 8 foto per poter giocare')
    } else {
      this.router.navigateByUrl('memo');
    }
  }

  onReset() {
    this.arrayFoto = [];
    this.sharedService.arrayFotoBackup = [];
    this.sharedService.clearAttUtilObj('nomiFotoPersonalizzate')
  }
}
