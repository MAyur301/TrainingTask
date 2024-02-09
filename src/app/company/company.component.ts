import { Component, Input, OnInit } from '@angular/core';

import { Companyservice } from '../service/company.service';
import { User } from '../modal/user.modal';
import { findIndex } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  company: any = [];
  role!: string | null;
  com!: User;
  name!: string;
  isupdate: boolean = false;
  isdelete: boolean = false;
  index!: number;
  item: boolean = false;
  constructor(
    private companyservice: Companyservice,
    private ro: ActivatedRoute,
    private route:Router
  ) {}

  ngOnInit() {
    //  this.role = this.ro.snapshot.queryParamMap.get('userrole')
    //     this.companyservice.getAllcourses().subscribe((data) => {
    //       this.company = data;
    // });
    this.company = this.ro.snapshot.data['comapany'];
    let data = sessionStorage.getItem('loggeduser');

    if (data) {
      this.com = JSON.parse(data);
      console.log(this.com);
    }
    if (this.com.Userrole === 'superadmin') {
      this.isupdate = true;
      this.isdelete = true;
    }
    if (this.com.Userrole === 'admin') {
      this.isupdate = false;
      this.isdelete = true;
    }
    if (this.com.Userrole === 'basicuser') {
      this.isupdate = false;
      this.isdelete = false;
    }
  }
  deletef(us: { id: number; name: string }) {
    this.index = this.companyservice.userdata.findIndex((ele) => {
      return ele.id === us.id && ele.name === us.name;
    });
    // console.log(this.index);
    this.companyservice.userdata.splice(this.index, 1);
  }
  editre(us: { id: number; name: string }) {
    this.item = true;
    this.index = this.companyservice.userdata.findIndex((ele) => {
      return ele.id === us.id && ele.name === us.name;
    });
    this.name = this.company[this.index].name;
  }
  update(name: string) {
    this.company[this.index].name = name;
    this.item = false;
  }


  onActivated(us:{id:string,name:string}) {

    //console.log(us);
    this.companyservice.activatedEmitter.next(us);

  }
}
