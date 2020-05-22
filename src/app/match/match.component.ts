import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  match:Match=new Match();
  isPlaying: boolean=false;

  constructor(public srvMatch: MatchService) { }

  ngOnInit(): void {
  }

  public lancerPartie()
  {
    this.srvMatch.startMatch(this.match)
  }


}
