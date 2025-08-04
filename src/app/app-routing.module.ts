import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FirstWeekLevel1Component } from './pages/first-week-welcome/first-week-level1/first-week-level1.component';
import { FirstWeekLevel2Component } from './pages/first-week-welcome/first-week-level2/first-week-level2.component';
import { FirstWeekLevel3Component } from './pages/first-week-welcome/first-week-level3/first-week-level3.component';
import { FirstWeekWelcomeComponent } from './pages/first-week-welcome/first-week-welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SecondWeekLevel1Component } from './pages/second-week-welcome/second-week-level1/second-week-level1.component';
import { SecondWeekLevel2Component } from './pages/second-week-welcome/second-week-level2/second-week-level2.component';
import { SecondWeekLevel3Component } from './pages/second-week-welcome/second-week-level3/second-week-level3.component';
import { SecondWeekLevel4Component } from './pages/second-week-welcome/second-week-level4/second-week-level4.component';
import { SecondWeekLevel5Component } from './pages/second-week-welcome/second-week-level5/second-week-level5.component';
import { SecondWeekLevel6Component } from './pages/second-week-welcome/second-week-level6/second-week-level6.component';
import { SecondWeekLevel7Component } from './pages/second-week-welcome/second-week-level7/second-week-level7.component';
import { SecondWeekWelcomeComponent } from './pages/second-week-welcome/second-week-welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: HomeComponent },
      { path: 'first-week', component: FirstWeekWelcomeComponent },
      { path: 'first-week-level1', component: FirstWeekLevel1Component },
      { path: 'first-week-level2', component: FirstWeekLevel2Component },
      { path: 'first-week-level3', component: FirstWeekLevel3Component },
      { path: 'second-week', component: SecondWeekWelcomeComponent },
      { path: 'second-week-level1', component: SecondWeekLevel1Component },
      { path: 'second-week-level2', component: SecondWeekLevel2Component },
      { path: 'second-week-level3', component: SecondWeekLevel3Component },
      { path: 'second-week-level4', component: SecondWeekLevel4Component },
      { path: 'second-week-level5', component: SecondWeekLevel5Component },
      { path: 'second-week-level6', component: SecondWeekLevel6Component },
      { path: 'second-week-level7', component: SecondWeekLevel7Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
