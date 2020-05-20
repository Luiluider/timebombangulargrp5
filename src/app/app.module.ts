import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LobbyComponent } from './lobby/lobby.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    InscriptionComponent,
    ConnexionComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
