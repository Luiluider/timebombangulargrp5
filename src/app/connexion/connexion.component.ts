import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user = new User();

  constructor(private srvUser: UserService, private router: Router) { }

  ngOnInit(): void {}

  public seConnecter() {
    this.srvUser.connexion(this.user);
  }

  public inscription() {
    this.router.navigate(['/inscription'])
  }
}
