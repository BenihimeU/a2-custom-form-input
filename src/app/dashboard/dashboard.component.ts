import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;
  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(
      (params: Data) => {
        this.username = params['username'];
      }
    );
  }

}
