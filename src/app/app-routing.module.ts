import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { EmployeeComponent } from './employee/employee.component';
import { BranchComponent } from './branch/branch.component';
import { CompanyComponent } from './company/company.component';
import { dashboardservice } from './service/dashboard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { loginauthservice } from './service/loginauth.service';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { superadminService } from './service/superadmin.service';
import { roleservice } from './service/role.service';
import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    canActivate: [loginauthservice],

  },
  { path: 'login',
   component: LoginComponent ,
  canActivate: [loginauthservice],
  },

  {
    path: 'dashborad',
    component: DashboradComponent,
    canActivate: [dashboardservice],
    children: [
      {
        path: 'employee',
        component: EmployeeComponent,
         data: { role: 'employee' },
         canActivate:[roleservice]
      },
      { path: 'branch',
      component: BranchComponent,
       data: { role: 'branch' } ,
       canActivate:[roleservice]
    },
      {
        path: 'company',
        component: CompanyComponent,
        resolve:{comapany:roleservice},
         data: { role: 'company' },
         canActivate:[roleservice]
      },
      {
        path: 'superadmin',
        component: SuperadminComponent,
        canActivate: [superadminService],
      },
      {
        path: 'Favourite',
        component: FavouriteComponent,
        canActivate: [superadminService],
      }
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
