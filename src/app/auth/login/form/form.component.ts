import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router, Data} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() onLoginSuccess = new EventEmitter<string>();
  creds: string;
  loginForm: FormGroup;
  form2: FormGroup;
  stacked: any = [];

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  constructor(public  formBuilder:FormBuilder, private router: Router ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.pattern('[a-zA-Z0-9]*'),Validators.required])],
      password: ['', Validators.compose([Validators.required,Validators.maxLength(10)])],
      range: [ [ 2, 8 ] ]
    });
  }

  ngOnInit() {

  }


  onLoginPress (){
      this.router.navigate(['dashboard'],{queryParams: {username: this.loginForm.value.username}});
  }
}
