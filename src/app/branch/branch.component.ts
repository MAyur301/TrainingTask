
import { Subscription, map } from 'rxjs';

import { Component, DoCheck, OnInit } from '@angular/core';
import { User } from '../modal/user.modal';
import { BranchService } from '../service/branch.service';
import { ActivatedRoute } from '@angular/router';
import { branch } from '../branch.modal';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
})
export class BranchComponent implements OnInit, DoCheck {
  branch: { id: number; name: string }[] = [];
  bran!: User;
  branchSub:branch[]=[];
  isupdate: boolean = false;
  isdelete: boolean = false;
  index!: number;
  item: boolean = false;
  name!: string;
  role!: string | null;
  search!: string;
  subscriptionuser!: branch[];
  constructor(
    private branchservice: BranchService,
    private ro: ActivatedRoute
  ) {}
  ngOnInit() {
    //  this.role = this.ro.snapshot.queryParamMap.get('userrole')
    this.branch = this.branchservice.userdata;

    let data = sessionStorage.getItem('loggeduser');
    if (data) {
      this.bran = JSON.parse(data);
      console.log(this.bran);
    }

    if (this.bran.Userrole === 'superadmin') {
      this.isupdate = true;
      this.isdelete = true;
    }
    if (this.bran.Userrole === 'admin') {
      this.isdelete = true;
      this.isupdate = false;
    }
    if (this.bran.Userrole === 'basicuser') {
      this.isdelete = false;
      this.isupdate = false;
    }
  }
  deleter(us:branch) {
    this.index = this.branchservice.userdata.findIndex(
      (ele) => ele.id === us.id
    );
    this.branchservice.userdata.splice(this.index, 1);
  }
  editre(us: branch) {
    this.item = true;
    this.index = this.branchservice.userdata.findIndex(
      (ele) => ele.id === us.id
    );
    this.name = this.branch[this.index].name;
  }
  update(name: string) {
    this.branch[this.index].name = name;
    this.item = false;
  }

  ngDoCheck(): void {
    //  console.log(this.search);
    this.getbranch();
  }
  getbranch() {
    this.branchservice.getBranch().pipe(
      map((val) => {
        return val.filter((brn) => {
          if (this.search) {
            return brn.name === this.search;
          } else {
            return brn;
          }
        })
      })
    ).subscribe(res =>
      {
        this.branchSub = res;
      })
  }
}
