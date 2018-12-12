import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { RestService } from './rest.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private restService: RestService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let resp = await this.restService.getStorage("userInfo");
    if (resp!=null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}