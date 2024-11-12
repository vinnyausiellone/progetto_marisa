import { Component } from '@angular/core';
import { LoadingService } from '../shared/services/loading.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
 isLoading: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading = this.loadingService.isLoading;
  }

}
