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
import { AppRouteModule } from "./app-route.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
