import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../modal/user.modal';
import { EmployeeService } from './../service/employee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:{id:number,name:string}[]=[]
  emp!:User
  isupdate:boolean=false;
  isdelete:boolean=false;
  name!:string;
  item:boolean=false;
  index!:number;
  role!:string|null;
  constructor(private com:EmployeeService,  private ro:ActivatedRoute,private route:Router)
  {


  }

  ngOnInit()
   {
     //this.role = this.ro.snapshot.queryParamMap.get('userrole')

     this.employee=this.com.userdata;
     let data = sessionStorage.getItem('loggeduser');


     if (data) {
       this.emp = JSON.parse(data);
       console.log(this.emp);

     }


     if(this.emp.Userrole==="superadmin")
     {
           this.isupdate=true;
           this.isdelete=true;
     }
     if(this.emp.Userrole==="admin")
     {
           this.isupdate=false;
           this.isdelete=true;
     }
     if(this.emp.Userrole==="basicuser")
     {
           this.isupdate=false;
           this.isdelete=false;
     }
   }
   deler(us:{id:number,name:string})
   {
         this.index=this.com.userdata.findIndex((ele) => ele.id === us.id)
         this.com.userdata.splice(this.index,1)

   }

   edit(us:{id:number,name:string}){
          this.item=true;
          this.index=this.com.userdata.findIndex((ele)=> ele.id===us.id)
          //console.log(this.index);
          this.name=this.employee[this.index].name;
   }
   update(name:string)
   {
      this.employee[this.index].name=name;
      this.item=false;
   }


}
