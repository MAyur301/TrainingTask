import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { User } from '../modal/user.modal';

import { Authservice } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private route: Router, private auth: Authservice) {}

  temp!: string;
  roletemp!: string;
  islogin!: boolean;
  UserData: User[] = [];
  authKey: boolean = true;
  set() {}

  login(email: string, pass: string) {
    let data = localStorage.getItem('Users');

    if (data) {
      this.UserData = JSON.parse(data);
      console.log(this.UserData);
    }

    let index = this.UserData.findIndex((ele) => {
      return ele.email === email && ele.password === pass;
    });

    // console.log(index);
    //console.log(this.UserData[index].Userrole);

    if (index == -1) {
      alert('Enter valid details');
    } else {
      // this.auth.login()
      //alert("Welcome " + this.temp )
      this.UserData[index].isLogged = true;
      sessionStorage.setItem('authKey', JSON.stringify(this.authKey));

      sessionStorage.setItem('loggeduser', JSON.stringify(this.UserData[index]));
      this.route.navigate(['/dashborad'], {
        queryParams: { userRole: this.UserData[index].Userrole },
      });
    }
  }
}
