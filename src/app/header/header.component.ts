import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  valoreDarkFC = new FormControl(false)

  @Output() cambioValoreDark = new EventEmitter<boolean>();

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {

  }

  onCambioValoreDark() {
    this.cambioValoreDark.emit(this.valoreDarkFC.value || false);
  }

  clickElenco() {
    this.router.navigateByUrl('elencoDettaglio');
  }
}




