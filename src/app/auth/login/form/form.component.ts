import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  creds: string;
  loginForm: FormGroup;
  constructor(public  formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9]*'),Validators.required])],
      password: ['', Validators.compose([Validators.required,Validators.maxLength(10)])]
    });
  }

  ngOnInit() {
  }

  onLoginPress (){
    console.log(this.creds);
  }
}
