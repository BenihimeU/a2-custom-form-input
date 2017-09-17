import { NgModule} from "@angular/core";
import {
    Routes,
    RouterModule
} from "@angular/router";
import { LoginComponent} from "./auth/login/login.component";
import { DashboardComponent} from "./dashboard/dashboard.component";
import { PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";


const  routes :Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full', data: {title: 'my App'}
  },
  {
    path:'login', component: LoginComponent, data: { title:'Login'}
  },
  {
    path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard', creds:{}}
  },
  {
    path: '**', component: PageNotFoundComponent, data: { title: 'Not Found'}
  }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRouteModule { }
