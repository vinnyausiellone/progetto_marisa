import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dettaglio2910',
  templateUrl: './dettaglio2910.component.html',
  styleUrl: './dettaglio2910.component.scss'
})
export class Dettaglio2910Component implements OnInit{
  valoreFC = new FormControl(false)

  constructor(public sharedService: SharedService) { }
  
  ngOnInit(): void {
    this.sharedService.setAttUtilObj('valoreToggle', this.valoreFC.value)
  }
}