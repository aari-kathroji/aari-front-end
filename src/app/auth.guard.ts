import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const cookie = document.cookie;
    const accessToken = cookie.split(';').filter(item => item.trim().startsWith('accessToken=')).map(item => item.split('=')[1])[0];
    const refreshToken = cookie.split(';').filter(item => item.trim().startsWith('refreshToken=')).map(item => item.split('=')[1])[0];
    //this.userService.setHeaders(accessToken, refreshToken);
    console.log(cookie);
    console.log(accessToken);
    console.log(refreshToken);
    if (this.userService.validateUser(accessToken, refreshToken)) {
      console.log("true");
      return true;
    }
    console.log("authguard");
    this.router.navigate(['/login']);
    return false;
  }

}

