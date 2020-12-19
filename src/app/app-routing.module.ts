import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:'',redirectTo:'home-page',pathMatch:'full'},
  {path:'home-page',component:HomePageComponent},
  {path:'dashboard-page/:id',component:DashboardComponent},
  {path:'parent',component:ParentComponent},
  {path:'**',component:ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
