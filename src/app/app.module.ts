import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstWeekWelcomeComponent } from './pages/first-week-welcome/first-week-welcome.component';
import { SecondWeekWelcomeComponent } from './pages/second-week-welcome/second-week-welcome.component';
import { SecondWeekLevel1Component } from './pages/second-week-welcome/second-week-level1/second-week-level1.component';
import { SecondWeekLevel2Component } from './pages/second-week-welcome/second-week-level2/second-week-level2.component';
import { SecondWeekLevel3Component } from './pages/second-week-welcome/second-week-level3/second-week-level3.component';
import { SecondWeekLevel4Component } from './pages/second-week-welcome/second-week-level4/second-week-level4.component';
import { SecondWeekLevel5Component } from './pages/second-week-welcome/second-week-level5/second-week-level5.component';
import { SecondWeekLevel6Component } from './pages/second-week-welcome/second-week-level6/second-week-level6.component';
import { SecondWeekLevel7Component } from './pages/second-week-welcome/second-week-level7/second-week-level7.component';
import { FirstWeekLevel1Component } from './pages/first-week-welcome/first-week-level1/first-week-level1.component';
import { FirstWeekLevel2Component } from './pages/first-week-welcome/first-week-level2/first-week-level2.component';
import { FirstWeekLevel3Component } from './pages/first-week-welcome/first-week-level3/first-week-level3.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { FirstWeekLevel4Component } from './pages/first-week-welcome/first-week-level4/first-week-level4.component';
import { FirstWeekLevel6Component } from './pages/first-week-welcome/first-week-level6/first-week-level6.component';
import { ThirdWeekWelcomeComponent } from './pages/third-week-welcome/third-week-welcome.component';
import { FirstWeekLevel5Component } from './pages/first-week-welcome/first-week-level5/first-week-level5.component';
import { ThirdWeekLevel1Component } from './pages/third-week-welcome/third-week-level1/third-week-level1.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LayoutComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    FirstWeekWelcomeComponent,
    SecondWeekWelcomeComponent,
    SecondWeekLevel1Component,
    SecondWeekLevel2Component,
    SecondWeekLevel3Component,
    SecondWeekLevel4Component,
    SecondWeekLevel5Component,
    SecondWeekLevel6Component,
    SecondWeekLevel7Component,
    FirstWeekLevel1Component,
    FirstWeekLevel2Component,
    FirstWeekLevel3Component,
    GamesPageComponent,
    FirstWeekLevel4Component,
    FirstWeekLevel6Component,
    ThirdWeekWelcomeComponent,
    FirstWeekLevel5Component,
    ThirdWeekLevel1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
