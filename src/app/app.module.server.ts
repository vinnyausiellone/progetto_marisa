import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { RouterModule } from '@angular/router';
 
@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule // Aggiungi questo import
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

 
