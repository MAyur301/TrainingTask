import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Authservice } from '../service/auth.service';
import { Companyservice } from '../service/company.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css'],
})
export class DashboradComponent implements OnInit,OnDestroy{
  data1!: boolean;
  role!:string|null;
  name!:string;
   userActivated!:any
   a!:{};
   private activatedSub!: Subscription
   //  @Input () item = "";

  constructor(private route: Router, private aut:Authservice,private ro:ActivatedRoute, private companyservice:Companyservice) {
    // console.log(this.item);
  }
  ngOnInit(){
    let data = sessionStorage.getItem('islogin');

    if (data) {
      this.data1 = JSON.parse(data);
    }
    this.role = this.ro.snapshot.queryParamMap.get('userRole');


     this.companyservice.activatedEmitter.subscribe(e=>{
      this.userActivated = e
      this.name = this.userActivated.name;
       //console.log(this.userActivated.name);
    })



  }

  logout() {
    sessionStorage.removeItem('loggeduser');
    sessionStorage.removeItem('authKey');
    let data = sessionStorage.getItem('islogin');
    if (data) {
      this.data1 = JSON.parse(data);
    }
    this.data1=false;
    this.route.navigate(['']);
    this.aut.logout();
  }
  ngOnDestroy(): void {
    //this.activatedSub.unsubscribe();
  }
}
