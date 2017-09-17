import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {CustomMaterialModule} from "./material/custom.mterial.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderComponent } from './header/header/header.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import {NouisliderModule} from "ng2-nouislider/src/nouislider";
import {MySliderComponent} from "./my-slider/my-slider.component";


const  routes :Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full', data: {title: 'my App'}
  },
  {
    path:'login', component: LoginComponent, data: { title:'Login'}
  },
  {
    path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'}
  },
  {
    path: '**', component: PageNotFoundComponent, data: { title: 'Not Found'}
  }
];
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
