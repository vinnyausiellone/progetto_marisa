import { Component } from '@angular/core';
import { LoadingService } from '../shared/services/loading.service';
import { Observable } from 'rxjs';
import { SharedService } from '../shared/services/shared.service';



@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent {
 isLoading: Observable<boolean>;

  constructor(private loadingService: LoadingService, public sharedService: SharedService) {
    this.isLoading = this.loadingService.isLoading;
  }

}
