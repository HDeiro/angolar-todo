import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserAuthenticated = true;

  constructor() { }

  checkIfUserIsAuthenticated(): boolean {
    return this.isUserAuthenticated;
  }
}
