import { Component, Input, OnInit } from '@angular/core';
import { IntPostsApprofondimento } from '../anagrafica-utente/anagrafica-utente.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approfondimento-elenco',
  templateUrl: './approfondimento-elenco.component.html',
  styleUrl: './approfondimento-elenco.component.scss'
})
export class ApprofondimentoElencoComponent implements OnInit {
  approfondimentoElenco?: IntPostsApprofondimento[];
  approfondimentoElencoBackup?: IntPostsApprofondimento[];
  id?: any;
  isVisualizza: boolean = false;
  isModifica: boolean = false;
  pageTitle: string = '';
  cambio = false;

 

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {
    this.route.data.subscribe((params: any) => {
      if (params['0']) {
        this.isVisualizza = params['0'] === 'isVisualizza';
        this.isModifica = params['0'] === 'isModifica';
      }
    });
  }



  ngOnInit(): void {
    this.pageTitle = this.isVisualizza ? 'Dettaglio Approfondimento' : 'Modifica Approfondimento';
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPostById(this.id);
  }

  getPostById(id: any) {
    this.apiService.getPostById(id).subscribe(res => {
      this.approfondimentoElenco = res;
      this.approfondimentoElencoBackup = res;
    })
  }

  bottoneIndietro() {
    window.history.back();
  }

  cambioBody(item: IntPostsApprofondimento) {
    const req =  JSON.stringify({
      userId: 1,
      title: 'title',
      id: item.id,
      body: item.body,
    })

    this.apiService.modificaApprofondimento(req).subscribe(res => {
      console.log('response', res)
    });
  }

  bottoneFiltraPari(){
    this.approfondimentoElenco = this.approfondimentoElencoBackup;
    const listaFiltrata = this.approfondimentoElenco?.filter(x => x.id % 2 === 0);
    this.approfondimentoElenco = listaFiltrata;
  }

  bottoneFiltraDispari(){
    this.approfondimentoElenco = this.approfondimentoElencoBackup;
    const listaFiltrata = this.approfondimentoElenco?.filter(x => x.id % 2 !== 0);
    this.approfondimentoElenco = listaFiltrata;
  }

}



