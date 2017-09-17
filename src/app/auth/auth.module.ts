import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CustomMaterialModule} from "../material/custom.mterial.module";
import { FormComponent } from './login/form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InputComponent } from './login/form/input/input.component';
import {CommonModule} from "@angular/common";
import {AlertModule} from "ngx-bootstrap";
import {IonRangeSliderModule} from "ng2-ion-range-slider";

@NgModule({
  declarations: [
    LoginComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    AlertModule,
    CommonModule,
    FormsModule,
    IonRangeSliderModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  exports: [
    LoginComponent
  ],
  providers: []
})

export class AuthModule {}
