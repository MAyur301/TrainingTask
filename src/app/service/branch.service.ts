import { branch } from './../branch.modal';
import { Observable } from 'rxjs';
export class BranchService{

    userdata=[
      {
        id:1,
        name:"Vastral",

      },
      {
        id:2,
        name:"Gota",
      },
      {
        id:3,
        name:"Surat",
      },
      {
        id:4,
        name:"Goa",
      },
      {
        id:5,
        name:"viratnagar",
      },
      {
        id:6,
        name:"London",
      },
      {
        id:7,
        name:"Us",
      },
      {
        id:8,
        name:"Palanpur",
      },
      {
        id:9,
        name:"iskon",
      },
      {
        id:10,
        name:"bodkdev",
      }
     ]
     getBranch()
     {
      return new Observable<branch[]>((sub) => {
        setTimeout(() => {
            sub.next(this.userdata)
        }, 1000)
    })
     }
}
