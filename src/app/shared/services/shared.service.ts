import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
 
@Injectable({ providedIn: 'root' })
 
export class SharedService {
  [x: string]: any;
    private utilObj: any = {};
    stream = new Subject<any>();
  /**
   * Metodo per assegnare <valore> alla variabile privata "this.utilObj[nomeAtt]"
   *
   * @param <nomeAtt> - nome dell'attributo
   * @param <valore> - valore dell'attributo
   * @returns void
   */
  setAttUtilObj(nomeAtt: string, valore: any): void {
      this.utilObj[nomeAtt] = Array.isArray(valore) ? [].concat(valore as []) : Object.assign({}, valore);
  }
  /**
   * Metodo per recuperare il valore della variabile privata "this.utilObj[nomeAtt]"
   *
   * @param <nomeAtt> - nome dell'attributo
   * @returns any
   */
  getAttUtilObj(nomeAtt: string): any { return this.utilObj[nomeAtt] }
  /**
   * Metodo per recuperare la variabile privata "this.utilObj"
   *
   * @returns any
   */
  getAllUtilObj(): any { return this.utilObj }
  /**
   * Metodo per pulire ( assegna {} ) il valore della variabile privata "this.utilObj"
   *
   * @returns any
   */
  clearAllUtilObj(): void { this.utilObj = new Object() }
  /**
   * Metodo per eliminare il "nameAtt" dalla variabile privata "this.utilObj"
   *
   * @param <nomeAtt> - nome dell'attributo
   * @returns any
   */
  clearAttUtilObj(nameAtt: string): void { delete this.utilObj[nameAtt] }
  scrollToTop(): void {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
 