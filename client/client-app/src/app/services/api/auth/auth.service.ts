import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ObjectUtils } from 'src/app/utilities/object-utils.util';
import { AuthService as SocialAuthService, LinkedInLoginProvider } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOCALSTORAGE_USER_KEY = 'wex#usr';
  private isUserAuthenticated = false;
  private userData: User;

  constructor(
    private socialAuthService: SocialAuthService
  ) { 
    this.socialAuthService.authState.subscribe(user => {
      if(!user) return;

      this.userData = new User();
      this.userData.name = user.name;
      this.userData.email = user.email;

      if(user.provider == 'GOOGLE') {
        this.userData.googlePhotoUrl = user.photoUrl;
        this.userData.googleUserId = user.id;
      } else if (user.provider == 'FACEBOOK') {
        this.userData.facebookPhotoUrl = user.photoUrl;
        this.userData.facebookUserId = user.id;
      }

      localStorage.setItem(this.LOCALSTORAGE_USER_KEY, JSON.stringify(this.userData));
      this.isUserAuthenticated = !!this.userData;
    });

    this.userData = JSON.parse(localStorage.getItem(this.LOCALSTORAGE_USER_KEY));
    this.isUserAuthenticated = !!this.userData;
  }

  checkIfUserIsAuthenticated(): boolean {
    return this.isUserAuthenticated;
  }

  getUserData(): User {
    return <User> ObjectUtils.clone(this.userData);
  }

  doLoginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  doLoginWithFacebook(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  doLogin(userToLogin: User): boolean {
    this.userData = userToLogin;
    this.isUserAuthenticated = true;
    localStorage.setItem(this.LOCALSTORAGE_USER_KEY, JSON.stringify(this.userData));
    return true;
  }

  doLogout(): boolean {
    this.socialAuthService.signOut();
    this.userData = new User();
    this.isUserAuthenticated = false;
    localStorage.removeItem(this.LOCALSTORAGE_USER_KEY);
    return true;
  }
}
