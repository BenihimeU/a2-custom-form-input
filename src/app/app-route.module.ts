import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./auth/login/login.component";
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import {PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";
const  routes :Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AppRouteModule
  ]
})
export class AppRouteModule {
}
