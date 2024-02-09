import { EventEmitter, Injectable } from "@angular/core"
import { Observable, Subject } from "rxjs"


@Injectable()
export class Companyservice{

  activatedEmitter = new Subject<object>();
    userdata=[
      {
        id:1,
        name:"BTL",

      },
      {
        id:2,
        name:"Paytem",
      },
      {
        id:3,
        name:"Google",
      },
      {
        id:4,
        name:"yahoo",
      },
      {
        id:5,
        name:"Facebook",
      },
      {
        id:6,
        name:"Crome",
      },
      {
        id:7,
        name:"Samsung",
      },
      {
        id:8,
        name:"Apple",
      },
      {
        id:9,
        name:"vivo",
      },
      {
        id:10,
        name:"Realme",
      }
     ]
    getAllcourses()
    {
       return   new Observable ((sub) => {
        setTimeout( () => {
          sub.next(this.userdata)
        }, 2000)
       })
    }

  }

