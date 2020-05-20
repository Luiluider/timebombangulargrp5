import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  constructor(public srvMatch: MatchService, public srvUser: UserService) { }

  ngOnInit(): void {
    this.srvMatch.reload();
    this.srvUser.reload();
  }




  public rejoindreMatch(){
  
  }


  public regarderMatch() {

  }







}
