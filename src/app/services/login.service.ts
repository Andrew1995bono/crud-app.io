import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {USER_LOGIN_DATA} from "../shared/constants/user-login-data/user-login-data";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private router: Router) { }

  public checkIfUserLogged(): boolean {
      return !!localStorage.getItem(USER_LOGIN_DATA)
  }

}
