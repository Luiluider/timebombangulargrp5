import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  match:Match=new Match();
  isPlaying: boolean=false;
  user: User = new User();

  constructor(public srvMatch: MatchService,public srvUser: UserService) { }

  ngOnInit(): void {
    this.user = this.srvUser.user
    this.match = this.srvMatch.match
    this.refresh();
  }

  public lancerPartie()
  {
    this.srvMatch.startMatch(this.match)
  }

  public refresh()
  {
    setInterval(() => {this.srvMatch.playMatch(this.match);}, 1000);
  }
}
