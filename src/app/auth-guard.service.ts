import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RestService } from './rest.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private restService: RestService
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      let resp = await this.restService.getStorage("userInfo");
      console.log(resp);
      if (resp != null) {
        await this.restService.checkLoginStatus();
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } catch (error) {
      this.router.navigate(['/login']);
      return false;
    }
  }

}