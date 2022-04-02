import { Injectable } from '@angular/core';
import { UserI } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {

  }

  loginByEmail(dataUser: UserI) {
    const { user, password } = dataUser;
    if( user=='user' && password == 'root')
      return true
    else
      return false
  }

  logout() {
    localStorage.removeItem('userData')
    return true
  }
}

