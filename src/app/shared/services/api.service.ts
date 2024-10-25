import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { Observable } from 'rxjs';
import { IntAnagrafica, IntAnagraficaDettaglio, IntNuovoPost, IntPosts, IntPostsApprofondimento } from '../../anagrafica-utente/anagrafica-utente.model';
@Injectable({ providedIn: 'root' })
 
export class ApiService {
  constructor(private httpClient: HttpClient,
    private appConfigService: AppConfigService) { }
  //
  // UTILITA' - INIZIO ------------------------------------------------------------------------------------------------------------------------------------------------
  //
  /**
  * Funzione che restituisce l'oggetto di tipo "HttpOptions" da utilizzare in tutte le chiamate api.
  */
  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  /**
  * Funzione per chiamate API di tipo POST.
  * @param url, specificare l'indirizzo url
  * @param object, opzionale, il body della chiamata, di default oggetto vuoto {}
  */
  private chiamataDiTipoPost(url: string, object?: any) {
    return this.httpClient.post<any>(url, object, this.getHttpOptions()).pipe();
  }
  /**
  * Funzione per chiamate API di tipo GET.
  * @param url, specificare l'indirizzo url
  */
  private chiamataDiTipoGet(url: string) {
    return this.httpClient.get<any>(url, this.getHttpOptions()).pipe();
  }
  /**
  * Funzione per chiamate API di tipo POST.
  * @param url, specificare l'indirizzo url
  * @param object, opzionale, il body della chiamata, di default oggetto vuoto {}
  */
  private chiamataDiTipoDelete(url: string) {
    return this.httpClient.delete<any>(url, this.getHttpOptions()).pipe();
  }
  /**
  * Funzione per chiamate API di tipo PUT.
  * @param url, specificare l'indirizzo url
  * @param object, opzionale, il body della chiamata, di default oggetto vuoto {}
  */
  private chiamataDiTipoPut(url: string, object: any = {}) {
    return this.httpClient.put<any>(url, object, this.getHttpOptions()).pipe();
  }
  public manutenzione() {
    return this.httpClient.get('./assets/maintenance.json')
  }
  //
  // UTILITA' - FINE ------------------------------------------------------------------------------------------------------------------------------------------------
  //
  // GLOBAL
  getAnagrafica(): Observable<IntAnagrafica> { return this.chiamataDiTipoGet('https://jsonplaceholder.typicode.com/posts/1') }
  getAnagraficaById(id: number): Observable<IntAnagraficaDettaglio[]> { return this.chiamataDiTipoGet('https://jsonplaceholder.typicode.com/comments?postId=' + id) }
  getPosts(): Observable<IntPosts[]> { return this.httpClient.get<IntPosts[]> ('https://jsonplaceholder.typicode.com/posts')}
  getPostById(id: number): Observable<IntPostsApprofondimento[]> { return this.chiamataDiTipoGet('https://jsonplaceholder.typicode.com/comments?postId=' + id) }
  modificaApprofondimento (obj: any): Observable<string> { return this.chiamataDiTipoPut ('https://jsonplaceholder.typicode.com/posts/' + obj.id, obj)}
  
  // getCurrentUserAnagrafica(): Observable<any> { return this.chiamataDiTipoGet(`${this.appConfigService.getConfig().backendUrl}` + URLS.GET_CURRENT_USER_ANAG) }
  // PREFETTURA
 // getListPref(obj: any) { return this.chiamataDiTipoPost(`${this.appConfigService.getConfig().backendUrl}` + URLS.GET_LIST_PREFETTURE, obj); }
}