import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: any;
  constructor(private http: HttpClient) { }
 
  public loadConfig() {
    return this.http.get('assets/config/config.json')
      .toPromise()
      .then((config: any) => {
        this.config = config;
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
 
  public getConfig() {
    return this.config;
  }
 
}