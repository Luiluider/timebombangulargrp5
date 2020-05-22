import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { UserService } from '../user.service';
import { Match } from '../match';
import { User } from '../user';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  isPlaying:false; //false si la partie n'a pas commencé et qu'on peut la rejoindre, vraie sinon et que l'on peut la regarder en spectateur
  match: Match = new Match();
  user: User = new User();

  constructor(public srvMatch: MatchService, public srvUser: UserService) { }

  ngOnInit(): void {
    this.srvMatch.loadCurrentMatches();
    this.user = this.srvUser.user
    this.match = this.srvMatch.match
  }

  public creerPartie()
  {
    this.srvMatch.createMatch(this.match)
  }

  public rejoindreMatch(m){
    this.srvMatch.joinMatch(m);
  }

  public regarderMatch(m){
  }

  public supprimerMatch(m){
    this.srvMatch.deleteMatch(m);
  }
}
