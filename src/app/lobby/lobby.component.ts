import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { UserService } from '../user.service';
import { Match } from '../match';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {
  isPlaying:false; //false si la partie n'a pas commencé et qu'on peut la rejoindre, vraie sinon et que l'on peut la regarder en spectateur
  match: Match = new Match();

  constructor(public srvMatch: MatchService, public srvUser: UserService) { }

  ngOnInit(): void {
    this.srvMatch.loadCurrentMatches();
  }

  public creerPartie()
  {
    this.match.owner = this.srvUser.user;
    this.srvMatch.createMatch(this.match)
  }

  public rejoindreMatch(){
    //Gerer le fait de rejoindre en 
    this.srvMatch.joinMatch();
      
  }







}
