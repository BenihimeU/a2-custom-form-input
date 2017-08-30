import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imgSrource: string;
  constructor( private router: Router) { }

  ngOnInit() {
    this.imgSrource = "https://backendless.com/wp-content/uploads/2016/04/angular2.png";
  }

  loginSuccess(user: string){
    console.log(user);
    this.router.navigate(['dashboard']);
  }
}
