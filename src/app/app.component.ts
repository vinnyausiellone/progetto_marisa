import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'projectName';

  constructor(public spinnerService: SpinnerService){}
  
  ngOnInit(): void {

  }
}
