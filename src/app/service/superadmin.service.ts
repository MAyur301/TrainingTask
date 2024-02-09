import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../modal/user.modal';
@Injectable()
export class superadminService implements CanActivate {
  UserData!:User;
  constructor(private router: Router, private ac: ActivatedRoute) {}




  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
 //   let role = this.ac.snapshot.queryParamMap.get('userrole');
    console.log(this.UserData);
    let data = sessionStorage.getItem('loggeduser');
    this.UserData=JSON.parse(data!)
   // console.log(this.UserData);


    if (this.UserData.Userrole==="superadmin") {
      return true;
    }
    else {
      alert('unauthorized');
      return false;
    }
  }
}
