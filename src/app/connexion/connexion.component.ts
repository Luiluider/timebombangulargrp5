import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user = new User();

  constructor(private srvUser: UserService) { }

  ngOnInit(): void {}

  public seConnecter() {
    this.srvUser.connexion(this.user);
  }
}
