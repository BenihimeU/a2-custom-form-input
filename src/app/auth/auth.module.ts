import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CustomMaterialModule} from "../material/custom.mterial.module";
import { FormComponent } from './login/form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InputComponent } from './login/form/input/input.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    LoginComponent,
    FormComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule
  ],
  exports: [
    LoginComponent
  ],
  providers: []
})

export class AuthModule {}
