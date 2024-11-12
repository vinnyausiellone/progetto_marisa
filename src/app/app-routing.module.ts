import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagraficaDettaglioComponent } from './anagrafica-dettaglio/anagrafica-dettaglio.component';
import { AnagraficaUtenteComponent } from './anagrafica-utente/anagrafica-utente.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ElencoDettaglioComponent } from './elenco-dettaglio/elenco-dettaglio.component';
import { ApprofondimentoElencoComponent } from './approfondimento-elenco/approfondimento-elenco.component';
import { ListaComponent } from './lista/lista.component';
import { RicettaComponent } from './ricetta/ricetta.component';
import { Esercizio2910Component } from './esercizio2910/esercizio2910.component';
import { Dettaglio2910Component } from './dettaglio2910/dettaglio2910.component';
import { PersonaSelezionataComponent } from './persona-selezionata/persona-selezionata.component';
import { RigaPariDispariComponent } from './riga-pari-dispari/riga-pari-dispari.component';
import { GetAnagraficaComponent } from './get-anagrafica/get-anagrafica.component';
import { SpinnerComponent } from './spinner/spinner.component';



const routes: Routes = [
  { path: 'header', component: HeaderComponent},
  { path: 'anagraficaUtente', component: AnagraficaUtenteComponent},
  { path: 'anagraficaDettaglio', component: AnagraficaDettaglioComponent},
  { path: 'anagraficaDettaglio/:id', component: AnagraficaDettaglioComponent},
  { path: 'personaSelezionata', component: PersonaSelezionataComponent},
  { path: 'homePage', component: HomePageComponent},
  { path: 'elencoDettaglio', component: ElencoDettaglioComponent},
  { path: 'elencoDettaglio/:id', component: ElencoDettaglioComponent },
  { path: 'approfondimentoElenco', component: ApprofondimentoElencoComponent},
  { path: 'approfondimentoElenco/:id', component: ApprofondimentoElencoComponent},
  { path: 'approfondimentoElencoVis/:id', component: ApprofondimentoElencoComponent, data: ['isVisualizza'] },
  { path: 'approfondimentoElencoMod/:id', component: ApprofondimentoElencoComponent, data: ['isModifica'] },
  { path: 'lista', component: ListaComponent},
  { path: 'ricetta', component: RicettaComponent},
  { path: 'ricetta/:value', component: RicettaComponent},
  { path: 'esercizio2910', component: Esercizio2910Component},
  { path: 'dettaglio2910', component: Dettaglio2910Component},
  { path: 'rigaPariDispari', component: RigaPariDispariComponent},
  { path: 'rigaPariDispari/:id', component: RigaPariDispariComponent},
  { path: 'getAnagrafica', component: GetAnagraficaComponent},
  { path: 'spinner', component: SpinnerComponent},
  { path: '**', redirectTo: '/homePage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash : true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}


