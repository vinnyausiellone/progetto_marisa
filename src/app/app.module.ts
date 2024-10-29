import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { ElencoDettaglioComponent } from './elenco-dettaglio/elenco-dettaglio.component';
import { ApprofondimentoElencoComponent } from './approfondimento-elenco/approfondimento-elenco.component';
import { AppComponent } from './app.component';
import { AnagraficaUtenteComponent } from './anagrafica-utente/anagrafica-utente.component';
import { AnagraficaDettaglioComponent } from './anagrafica-dettaglio/anagrafica-dettaglio.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaComponent } from './lista/lista.component';
import { RicettaComponent } from './ricetta/ricetta.component';
import { ProvaEventoComponent } from './lista/prova-evento/prova-evento.component';
import { Esercizio2910Component } from './esercizio2910/esercizio2910.component';
import { Dettaglio2910Component } from './dettaglio2910/dettaglio2910.component';


@NgModule({
  declarations: [
    AppComponent,
    AnagraficaUtenteComponent,
    AnagraficaDettaglioComponent,
    HomePageComponent,
    HeaderComponent,
    ElencoDettaglioComponent,
    ApprofondimentoElencoComponent,
    ListaComponent,
    RicettaComponent,
    ProvaEventoComponent,
    Esercizio2910Component,
    Dettaglio2910Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
