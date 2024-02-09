import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Authservice } from './auth.service';

@Injectable()
export class loginauthservice implements CanActivate {
  data1!: boolean;
  constructor(private aut: Authservice, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {



    if (sessionStorage.getItem('authKey') === 'true') {
      this.router.navigate(['/dashborad']);
      return false;
    }
    return true;
  }
}
