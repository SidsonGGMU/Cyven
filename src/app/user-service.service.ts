import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user : string;
  isConnected : boolean = false;
  constructor()  {}

  setUserCredentials(mail : string) {
    this.user = mail;
    this.isConnected = true;
  }

  isUserConnected() {
    return this.isConnected;
  }
  public getCredentials() : string {
    return this.user;
  }
}
