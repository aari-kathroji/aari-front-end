import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user.service';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const cookie = document.cookie;
    const accessToken = cookie.split(';').filter(item => item.trim().startsWith('accessToken=')).map(item => item.split('=')[1])[0];
    const refreshToken = cookie.split(';').filter(item => item.trim().startsWith('refreshToken=')).map(item => item.split('=')[1])[0];
    const role = cookie.split(';').filter(item => item.trim().startsWith('role=')).map(item => item.split('=')[1])[0];
    console.log(cookie);
    console.log(accessToken);
    console.log(refreshToken);
    console.log(role);
    const decryptedRole = CryptoJS.AES.decrypt(role, 'secret key 123').toString(CryptoJS.enc.Utf8);
    if (this.userService.validateUser(accessToken, refreshToken,decryptedRole)) {
      console.log("Authentication successful, navigating to home.");
      window.location.href = "/home";
      return true;
    }
    else{
      console.log("Authentication failed, navigating to login.");
      window.location.href = "/login";
      return false;
    }
  }
}

