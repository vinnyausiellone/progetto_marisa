import { Component } from '@angular/core';
import { DialogService } from '../shared/services/dialog.service';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-memo-impostazioni',
  templateUrl: './memo-impostazioni.component.html',
  styleUrl: './memo-impostazioni.component.scss'
})
export class MemoImpostazioniComponent {
  arrayFoto: File[] = [];
  file: File | null = null;

  constructor(private dialogService: DialogService, private sharedService: SharedService) { }


  onFileChange(event: any): void {
    // if (this.files) this.arrayFoto.push(this.files)
    //   console.log(this.arrayFoto);
    //   if (this.arrayFoto.length > 8) {
    //     this.dialogService.errore('Puoi caricare un massimo di 8 foto')
    //     return;
    //   }
    //   this.arrayFoto = []; // Resetta l'array prima di aggiungere nuove immagine
    this.file = event.target.files[0];
    if (this.file) {
      this.file = this.file;
    }
    if (this.file){ this.arrayFoto.push(this.file)
      console.log(this.arrayFoto);
    if (this.arrayFoto.length > 8) {
          this.dialogService.errore('Puoi caricare un massimo di 8 foto')
          return;
    }
      }
  }

  onUpload() {
    const arrayFotoNome = this.arrayFoto.filter(x => x.name);
    this.sharedService.setAttUtilObj('valoreArray', { nomi: arrayFotoNome })
  }

}
