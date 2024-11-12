import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
import { DialogComponent } from './shared/dialog/dialog.component';
import { PersonaSelezionataComponent } from './persona-selezionata/persona-selezionata.component';
import { RigaPariDispariComponent } from './riga-pari-dispari/riga-pari-dispari.component';
import { GetAnagraficaComponent } from './get-anagrafica/get-anagrafica.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './shared/services/loading.interceptor';


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
    DialogComponent,
    PersonaSelezionataComponent,
    RigaPariDispariComponent,
    GetAnagraficaComponent,
    SpinnerComponent,
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
    MatChipsModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
