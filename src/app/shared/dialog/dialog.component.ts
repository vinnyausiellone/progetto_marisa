import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogDataDTO {
  type: 'S' | 'E' | 'C' | 'A' | 'SEL';
  title: string;
  message: string | DialogMsgDTO[];
  labelPositiva?: string;
  disabledConfirm: boolean;
}

export class DialogMsgDTO {
  key?: string;
  value?: string;
  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  title: string = '';
  message: DialogMsgDTO[] = [new DialogMsgDTO('', '')];
  type!: 'S' | 'E' | 'C' | 'A' | 'SEL' | 'AGG' | 'SEL_TIT';
  labelPositiva = 'Si';

  constructor(
    @Inject(MAT_DIALOG_DATA) data: DialogDataDTO) {
    this.title = data.title;
    this.message = Array.isArray(data.message) ? data.message : [new DialogMsgDTO('', data.message)];
    this.type = data.type;
    this.labelPositiva = data.labelPositiva || this.labelPositiva;
  }

}

