import { Injectable } from '@angular/core';
import { Match } from './match';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl: string="";
  public matches: Array<Match>=[];
  public terminatedMatches: Array<Match>=[];

  constructor(private appConfig: AppConfigService, private http: HttpClient, private router: Router) {
    this.apiUrl = `${ this.appConfig.url}/matches`
   }

   public loadCurrentMatches() {
   this.http.get<Array<Match>>(this.apiUrl)
   .subscribe(matches => this.matches = matches);
   }
   //- Liste des parties en attente et en cours -
// [GET] http://176.143.99.66:8080/api/matches

   public loadHistory() {
    this.http.get<Array<Match>>(this.apiUrl + "/terminated")
    .subscribe(matches => this.terminatedMatches = matches);
  }
  // - Liste des parties terminées -
// [GET] http://176.143.99.66:8080/api/matches/terminated

  public createMatch(match) {
    this.http.post<Match>(this.apiUrl, match)
    .subscribe(respMatch => {
        this.Unepartiedetaillee(respMatch.id);
    });
  }
  // - Créer une partie -
// [POST] http://176.143.99.66:8080/api/matches (name, size)

  public Unepartiedetaillee(id) {
    this.http.get<Array<Match>>(this.apiUrl + "/{id}")
    .subscribe(respMatch => this.router.navigate(['/match']));
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
