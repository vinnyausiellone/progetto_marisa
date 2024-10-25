import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { IntPosts } from '../anagrafica-utente/anagrafica-utente.model';

@Component({
  selector: 'app-elenco-dettaglio',
  templateUrl: './elenco-dettaglio.component.html',
  styleUrl: './elenco-dettaglio.component.scss'
})
export class ElencoDettaglioComponent implements OnInit {
  posts?: IntPosts[];
  
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService){}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.apiService.getPosts().subscribe(res => {
      this.posts = res;
  })
}

EditApprofondimento(id: number){
  this.router.navigateByUrl('approfondimentoElencoMod/' + id);
}

VisApprofondimento(id: number){
  this.router.navigateByUrl('approfondimentoElencoVis/' + id);
}

}
