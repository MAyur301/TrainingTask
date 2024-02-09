import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Resolve,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../modal/user.modal';
import { LoginComponent } from '../login/login.component';
import { EmployeeComponent } from '../employee/employee.component';
import { RegistrationComponent } from '../registration/registration.component';
import { Companyservice } from './company.service';

@Injectable()
export class roleservice implements CanActivate , CanDeactivate<RegistrationComponent> , Resolve<any[]>{
  a!: User;
  constructor(private router: Router , private comapnay:Companyservice) {
    let data = sessionStorage.getItem('loggeduser');
    if (data) {
      this.a = JSON.parse(data);
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {


    if (this.a.permisioon.includes(route.data['role'])) {
      return true;
    }
     else {
      alert("Oops Not Authorized")
      this.router.navigate(['/dashborad']);
      return false;
    }
  }
  canDeactivate(component: RegistrationComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return  component.canReg();
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    //  this.comapnay.getAllcourses().subscribe((data) => {

    //  });
        return  this.comapnay.getAllcourses();


  }
}
