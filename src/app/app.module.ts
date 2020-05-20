import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'lobby', component: LobbyComponent },
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: '**', component: ConnexionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    InscriptionComponent,
    ConnexionComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
