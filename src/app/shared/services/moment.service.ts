import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  // Esponi l'oggetto Moment.js
  get moment() {
    return moment;
  }
}