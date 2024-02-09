
import { EmployeeService } from './service/employee.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { EmployeeComponent } from './employee/employee.component';
import { CompanyComponent } from './company/company.component';
import { BranchComponent } from './branch/branch.component';
import { Companyservice } from './service/company.service';
import { BranchService } from './service/branch.service';
import { dashboardservice } from './service/dashboard.service';
import { Authservice } from './service/auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import {loginauthservice} from './service/loginauth.service';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { superadminService } from './service/superadmin.service';
import { roleservice } from './service/role.service';
import { FavouriteComponent } from './favourite/favourite.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboradComponent,
    EmployeeComponent,
    CompanyComponent,
    BranchComponent,
    PageNotFoundComponent,
    SuperadminComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [Companyservice,EmployeeService,BranchService,dashboardservice,Authservice,loginauthservice,superadminService,roleservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
