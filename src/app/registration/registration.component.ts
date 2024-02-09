import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../modal/user.modal';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

   @ViewChild('name')name!:ElementRef;
   @ViewChild('email')email!:ElementRef;
   @ViewChild('password')password!:ElementRef;
   issum:boolean=false;
   userdata:User[]=[
    {
      id:1,
      name:"Mayur",
      email:"bhavsarmayur@gmail.com",
      password:"Mak1234",
      Userrole:"superadmin",
      isLogged:null,
      permisioon:['branch','employee','company']
    },
    {
      id:2,
      name:"Jay",
      email:"Jay@gmail.com",
      password:"Mak123",
      Userrole:"admin",
      isLogged:null,
      permisioon:['branch','company']
    },
   ]
  Registerdata(name:string,email:string,pass:string){


    if(this.name.nativeElement.value === "" && this.email.nativeElement.value ==="" && this.password.nativeElement.value ==="")
    {
      alert("fill the details");
    }
    else
    {
      this.issum=true;
      this.userdata.push(
        {
          id:this.userdata.length+1,name:name,email:email,password:pass,Userrole:"basicrole",isLogged:null,permisioon:['employee']
        }
      )
      console.log(this.userdata);
      localStorage.setItem('Users',JSON.stringify(this.userdata))
      this.name.nativeElement.value="";
      this.email.nativeElement.value="";
      this.password.nativeElement.value="";
    }

    }
    canReg()
    {
       if((this.name && this.email&& this.password) && !this.issum)
       {
         return confirm('you  have unsavechanges. do you want to navigate ?')
       }
       else
       {
         return true;
       }
    }

}
