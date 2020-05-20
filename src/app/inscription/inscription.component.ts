import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user = new User();

  constructor(private srvUser : UserService) { }

  ngOnInit() {

    this.srvUser.reload();
  }

  public subscribe() {

    this.srvUser.inscription(this.user);
    this.user = new User();
  }

}


