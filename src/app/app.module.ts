import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {CustomMaterialModule} from "./material/custom.mterial.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderComponent } from './header/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from "./auth/login/login.component";
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import {NouisliderModule} from "ng2-nouislider/src/nouislider";
import {MySliderComponent} from "./my-slider/my-slider.component";

import { AppRouteModule } from "./app-route.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PageNotFoundComponent,
    MySliderComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    NouisliderModule,
    AppRouteModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
