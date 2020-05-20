import { Injectable } from '@angular/core';
import { User } from './user';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = "";
  public users: Array<User> = null;
  public user: User = new User();

  constructor(private appConfig: AppConfigService, private http: HttpClient, private router: Router) {
    this.apiUrl = `${ this.appConfig.url }/users`;
  }

  public reload() {
    this.http.get<Array<User>>(this.apiUrl)
        .subscribe(users => this.users = users);
  }

  public inscription(user) {
    this.http.post<User>(this.apiUrl + "/subscribe", user)
        .subscribe(respUser => {
          this.router.navigate(['/connexion']);
        });
  }

  public connexion(user) {
    this.http.post<User>(this.apiUrl + "/login", user)
        .subscribe(respUser => {
          this.user = respUser;
          this.router.navigate(['/lobby']);
        });
  }

}
