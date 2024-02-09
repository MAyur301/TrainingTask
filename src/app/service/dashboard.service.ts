import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Authservice } from './auth.service';

@Injectable()
export class dashboardservice implements CanActivate {
  constructor(private aut: Authservice, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (sessionStorage.getItem('authKey') === 'true') {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
