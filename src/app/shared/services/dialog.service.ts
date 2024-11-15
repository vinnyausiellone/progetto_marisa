import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { DialogComponent, DialogMsgDTO } from '../dialog/dialog.component';

 
@Injectable({ providedIn: 'root' })
 
export class DialogService {
 
  constructor(private dialog: MatDialog) { }
 
  /**
  * Apre una modale di "successo" utilizzando il component "DialogComponent", al quale sarà fornito il titolo @tit
  * il messaggio @msg ed inoltre, se presente, sarà lanciata la funzione @fun alla chiusura della modale.
  * @param msg: (Opzionale) Corpo del messaggio
  * @param tit: (Opzionale) Titolo della modale
  * @param fun: (Opzionale) Funzione che gestisce il ritorno alla chiusura della modale
  */
  successo(msg: string | DialogMsgDTO[] = 'Procedura conclusa con successo', tit = 'Successo', fun?: Function) {
    return this.openModale(DialogComponent, { type: 'S', title: tit, message: msg }, fun);
  }

  

  pareggio(msg: string | DialogMsgDTO[] = 'Pareggio', tit = 'Pareggio', fun?: Function) {
    return this.openModale(DialogComponent, { type: 'S', title: tit, message: msg }, fun);
  }

  vincita (msg: string | DialogMsgDTO[] = 'Vincita', tit = 'HAI VINTO!', fun?: Function) {
    return this.openModale(DialogComponent, { type: 'S', title: tit, message: msg }, fun);
  }
  /**
  * Apre una modale di "errore" utilizzando il component "DialogComponent", al quale sarà fornito il titolo @tit
  * il messaggio @msg ed inoltre, se presente, sarà lanciata la funzione @fun alla chiusura della modale.
  * @param msg: (Opzionale) Corpo del messaggio
  * @param tit: (Opzionale) Titolo della modale
  * @param fun: (Opzionale) Funzione che gestisce il ritorno alla chiusura della modale
  */
  errore(msg: string | DialogMsgDTO[] = 'Si è verificato un errore imprevisto', tit = 'Errore', fun?: Function) {
    return this.openModale(DialogComponent, { type: 'E', title: tit, message: msg }, fun);
  }
  /**
  * Apre la modale utilizzando il @component passato in input, al quale sarà fornito l'oggetto @dataObj
  * Inoltre se è presente @fun sarà lanciata la funzione fornita alla chiusura della modale.
  * @param component: Componente
  * @param dataObj: Oggetto utile al Componente
  * @param fun: (Opzionale) Funzione che gestisce il ritorno alla chiusura della modale
  */
  openModale(component: any, dataObj: any, fun?: Function) {
    const dialogRef = this.dialog.open(component, { data: dataObj, autoFocus: false });
    if (fun) { dialogRef.afterClosed().subscribe(result => fun(result)) }
  }
}