import { Component, OnInit } from '@angular/core';
import { Companyservice } from '../service/company.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
   userActivated = false;
  constructor(private companyservice:Companyservice)
  {

  }
  ngOnInit(): void {
   
  }
}
