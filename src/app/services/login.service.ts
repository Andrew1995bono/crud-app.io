import {Injectable} from '@angular/core';
import {USER_LOGIN_DATA} from "../shared/constants/user-login-data/user-login-data";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public checkIfUserLogged(): boolean {
    return !!localStorage.getItem(USER_LOGIN_DATA)
  }

  public deleteLoggedUser(): void {
    localStorage.removeItem(USER_LOGIN_DATA);
  }

}
