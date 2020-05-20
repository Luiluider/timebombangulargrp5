import { Injectable } from '@angular/core';
import { Match } from './match';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl: string="";
  public matches: Array<Match>=[];

  constructor(private appConfig: AppConfigService, private http: HttpClient) {
    this.apiUrl = `${ this.appConfig.url}/matches`
   }

   public reload() {
    this.http.get<Array<Match>>(this.apiUrl)
    .subscribe(matches => this.matches = matches);
  }


   public loadCurrentMatches() {
   this.http.get<Array<Match>>(this.apiUrl)
   .subscribe(matches => this.matches = matches);
   }
   //- Liste des parties en attente et en cours -
// [GET] http://176.143.99.66:8080/api/matches

   public loadHistory() {
    this.http.get<Array<Match>>("${ this.apiUrl }" + "/terminated")
    .subscribe(matches => this.matches = matches);
  }
  // - Liste des parties terminées -
// [GET] http://176.143.99.66:8080/api/matches/terminated

  public createMatch() {
   
  }
  // - Créer une partie -
// [POST] http://176.143.99.66:8080/api/matches (name, size)

  public Unepartiedetaillee() {
   
  }
  // - Une partie détaillée -
// [GET] http://176.143.99.66:8080/api/matches/idPartie

  public deleteMatch() {
   
  }
  // - Supprimer une partie -
// [DELETE] http://176.143.99.66:8080/api/matches/idPartie

  public joinMatch() {
   
  }
  // - Rejoindre une partie -
// [PUT] http://176.143.99.66:8080/api/matches/idPartie

  public playMatch() {
   
  }
  // - Jouer sur une partie -
// [PUT] http://176.143.99.66:8080/api/matches/idPartie/play (id) { id de la carte }


  public subscribeToSSE() {
   
  }
  // - S'abonner à SSE -
// [GET] http://176.143.99.66:8080/api/matches/sse-stream


}
