import { Component } from '@angular/core';
import { DialogService } from '../shared/services/dialog.service';
import { SharedService } from '../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memo-impostazioni',
  templateUrl: './memo-impostazioni.component.html',
  styleUrl: './memo-impostazioni.component.scss'
})
export class MemoImpostazioniComponent {
  arrayFoto: File[] = [];
  file: File | null = null;
 
  constructor(private router: Router, private dialogService: DialogService, private sharedService: SharedService) { }

  onFileChange(event: any): void {
    this.file = event.target.files[0];
    if (this.file && this.arrayFoto.length <8){ this.arrayFoto.push(this.file)
      console.log(this.arrayFoto);
    } else  {
          this.dialogService.errore('Puoi caricare un massimo di 8 foto')
          return;
    }
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
    this.sharedService.clearAttUtilObj('nomiFotoPersonalizzate')
  }
}
