import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagraficaDettaglioComponent } from './anagrafica-dettaglio/anagrafica-dettaglio.component';
import { AnagraficaUtenteComponent } from './anagrafica-utente/anagrafica-utente.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ElencoDettaglioComponent } from './elenco-dettaglio/elenco-dettaglio.component';
import { ApprofondimentoElencoComponent } from './approfondimento-elenco/approfondimento-elenco.component';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
 
  { path: 'anagraficaUtente', component: AnagraficaUtenteComponent},
  { path: 'anagraficaDettaglio', component: AnagraficaDettaglioComponent},
  { path: 'anagraficaDettaglio/:id', component: AnagraficaDettaglioComponent},
  { path: 'homePage', component: HomePageComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'elencoDettaglio', component: ElencoDettaglioComponent},
  { path: 'elencoDettaglio/:id', component: ElencoDettaglioComponent },
  { path: 'approfondimentoElenco', component: ApprofondimentoElencoComponent},
  { path: 'approfondimentoElenco/:id', component: ApprofondimentoElencoComponent},
  { path: 'approfondimentoElencoVis/:id', component: ApprofondimentoElencoComponent, data: ['isVisualizza'] },
  { path: 'approfondimentoElencoMod/:id', component: ApprofondimentoElencoComponent, data: ['isModifica'] },
  { path: 'lista', component: ListaComponent},
  { path: '**', redirectTo: '/homePage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}


