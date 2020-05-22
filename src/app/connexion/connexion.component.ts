import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { AppConfigService } from '../app-config.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user = new User();

  constructor(private srvUser: UserService, private appConfig: AppConfigService, private router: Router) { }

  ngOnInit(): void {}

  public seConnecter() {
    this.appConfig.login = this.user.username;
    this.appConfig.mdp = this.user.password;
    this.srvUser.connexion(this.user);
  }

  public inscription() {
    this.router.navigate(['/inscription'])
  }
}
