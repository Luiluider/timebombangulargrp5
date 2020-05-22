import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { AppConfigService } from '../app-config.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  match:Match=new Match();
  isPlaying: boolean=false;
  user: User = new User();

  constructor(public srvMatch: MatchService,public srvUser: UserService,private appConfig: AppConfigService) { }

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
    setInterval(() => {
      this.appConfig.setHeaders(this.user.username,this.user.password)
      console.log(this.user.username + " " + this.user.password);}, 1000);
  }
}
