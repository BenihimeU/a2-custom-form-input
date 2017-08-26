import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageTitle: string = 'Angular Demo App';
  isLoginSuccess: boolean = false;
  constructor( private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        this.pageTitle=event['title'];
        this.isLoginSuccess = this.pageTitle !== 'Login';
    });
  }

}
