import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { WeeklydetailsComponent } from './simplepath/weeklydetails/weeklydetails.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'dashboard',component:DashboardComponent},
  {path:'simple',children:[
    {path:'weekly/:id', component:WeeklydetailsComponent},
    {path:'lesson/', component:WeeklydetailsComponent},
    {path:'games/', component:WeeklydetailsComponent}
  ]},
  {path:'advanced',children:[

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
