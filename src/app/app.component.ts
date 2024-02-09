import { Router , Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel} from '@angular/router';
import { Component, OnInit,  inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tranningtask';



  showloadder:boolean= false;

   router: Router = inject(Router);
  ngOnInit()
  {
       this.router.events.subscribe((routerEvent : Event ) => {
        if(routerEvent instanceof NavigationStart)
        {
            this.showloadder = true;
        }

        if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationError || routerEvent instanceof NavigationCancel)
        {
          this.showloadder= false;
        }
       })
  }
}
