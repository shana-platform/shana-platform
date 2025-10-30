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
import { ThirdWeekLevel2Component } from './pages/third-week-welcome/third-week-level2/third-week-level2.component';
import { ThirdWeekLevel3Component } from './pages/third-week-welcome/third-week-level3/third-week-level3.component';
import { ThirdWeekLevel4Component } from './pages/third-week-welcome/third-week-level4/third-week-level4.component';
import { ThirdWeekLevel5Component } from './pages/third-week-welcome/third-week-level5/third-week-level5.component';
import { ThirdWeekLevel7Component } from './pages/third-week-welcome/third-week-level7/third-week-level7.component';
import { ThirdWeekLevel6Component } from './pages/third-week-welcome/third-week-level6/third-week-level6.component';
import { FourthWeekWelcomeComponent } from './pages/fourth-week-welcome/fourth-week-welcome.component';
import { FourthWeekLevel1Component } from './pages/fourth-week-welcome/fourth-week-level1/fourth-week-level1.component';
import { FourthWeekLevel2Component } from './pages/fourth-week-welcome/fourth-week-level2/fourth-week-level2.component';
import { FourthWeekLevel3Component } from './pages/fourth-week-welcome/fourth-week-level3/fourth-week-level3.component';
import { FourthWeekLevel4Component } from './pages/fourth-week-welcome/fourth-week-level4/fourth-week-level4.component';
import { FourthWeekLevel6Component } from './pages/fourth-week-welcome/fourth-week-level6/fourth-week-level6.component';
import { FourthWeekLevel7Component } from './pages/fourth-week-welcome/fourth-week-level7/fourth-week-level7.component';
import { FifthWeekWelcomeComponent } from './pages/fifth-week-welcome/fifth-week-welcome.component';
import { FifthWeekLevel1Component } from './pages/fifth-week-welcome/fifth-week-level1/fifth-week-level1.component';
import { FifthWeekLevel3Component } from './pages/fifth-week-welcome/fifth-week-level3/fifth-week-level3.component';
import { FifthWeekLevel2Component } from './pages/fifth-week-welcome/fifth-week-level2/fifth-week-level2.component';
import { FifthWeekLevel4Component } from './pages/fifth-week-welcome/fifth-week-level4/fifth-week-level4.component';
import { FifthWeekLevel5Component } from './pages/fifth-week-welcome/fifth-week-level5/fifth-week-level5.component';
import { FifthWeekLevel6Component } from './pages/fifth-week-welcome/fifth-week-level6/fifth-week-level6.component';
import { FifthWeekLevel7Component } from './pages/fifth-week-welcome/fifth-week-level7/fifth-week-level7.component';
import { ConfidenceModuleComponent } from './pages/confidence-module/confidence-module.component';
import { IdentityModuleComponent } from './pages/identity-module/identity-module.component';
import { PlanningModuleComponent } from './pages/planning-module/planning-module.component';
import { ConfidenceWeek1Component } from './pages/confidence-module/confidence-week1/confidence-week1.component';
import { ConfidenceWeek1L1Component } from './pages/confidence-module/confidence-week1/confidence-week1-l1/confidence-week1-l1.component';
import { ConfidenceWeek1L2Component } from './pages/confidence-module/confidence-week1/confidence-week1-l2/confidence-week1-l2.component';
import { ConfidenceWeek1L3Component } from './pages/confidence-module/confidence-week1/confidence-week1-l3/confidence-week1-l3.component';
import { Week1L2DicussionTabComponent } from './pages/confidence-module/confidence-week1/confidence-week1-l2/week1-l2-dicussion-tab/week1-l2-dicussion-tab.component';
import { ConfidenceWeek2Component } from './pages/confidence-module/confidence-week2/confidence-week2.component';
import { ConfidenceWeek2L1Component } from './pages/confidence-module/confidence-week2/confidence-week2-l1/confidence-week2-l1.component';
import { ConfidenceWeek2L2Component } from './pages/confidence-module/confidence-week2/confidence-week2-l2/confidence-week2-l2.component';
import { Week2L2VideoComponent } from './pages/confidence-module/confidence-week2/confidence-week2-l2/week2-l2-video/week2-l2-video.component';
import { Week2L2DiscussionComponent } from './pages/confidence-module/confidence-week2/confidence-week2-l2/week2-l2-discussion/week2-l2-discussion.component';
import { Week2L2ActivityComponent } from './pages/confidence-module/confidence-week2/confidence-week2-l2/week2-l2-activity/week2-l2-activity.component';
import { Week1L2VideoTabComponent } from './pages/confidence-module/confidence-week1/confidence-week1-l2/week1-l2-video-tab/week1-l2-video-tab.component';
import { ConfidenceWeek2L3Component } from './pages/confidence-module/confidence-week2/confidence-week2-l3/confidence-week2-l3.component';
import { ConfidenceWeek3Component } from './pages/confidence-module/confidence-week3/confidence-week3.component';
import { ConfidenceWeek3L1Component } from './pages/confidence-module/confidence-week3/confidence-week3-l1/confidence-week3-l1.component';
import { ConfidenceWeek3L2Component } from './pages/confidence-module/confidence-week3/confidence-week3-l2/confidence-week3-l2.component';
import { Week3L2ActivityComponent } from './pages/confidence-module/confidence-week3/confidence-week3-l2/week3-l2-activity/week3-l2-activity.component';
import { Week3L2VideoComponent } from './pages/confidence-module/confidence-week3/confidence-week3-l2/week3-l2-video/week3-l2-video.component';
import { Week3L2DiscussionComponent } from './pages/confidence-module/confidence-week3/confidence-week3-l2/week3-l2-discussion/week3-l2-discussion.component';
import { ConfidenceWeek3L3Component } from './pages/confidence-module/confidence-week3/confidence-week3-l3/confidence-week3-l3.component';

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
    ThirdWeekLevel1Component,
    ThirdWeekLevel2Component,
    ThirdWeekLevel3Component,
    ThirdWeekLevel4Component,
    ThirdWeekLevel5Component,
    ThirdWeekLevel7Component,
    ThirdWeekLevel6Component,
    FourthWeekWelcomeComponent,
    FourthWeekLevel1Component,
    FourthWeekLevel2Component,
    FourthWeekLevel3Component,
    FourthWeekLevel4Component,
    FourthWeekLevel6Component,
    FourthWeekLevel7Component,
    FifthWeekWelcomeComponent,
    FifthWeekLevel1Component,
    FifthWeekLevel3Component,
    FifthWeekLevel2Component,
    FifthWeekLevel4Component,
    FifthWeekLevel5Component,
    FifthWeekLevel6Component,
    FifthWeekLevel7Component,
    ConfidenceModuleComponent,
    IdentityModuleComponent,
    PlanningModuleComponent,
    ConfidenceWeek1Component,
    ConfidenceWeek1L1Component,
    ConfidenceWeek1L2Component,
    ConfidenceWeek1L3Component,
    Week1L2DicussionTabComponent,
    ConfidenceWeek2Component,
    ConfidenceWeek2L1Component,
    ConfidenceWeek2L2Component,
    Week2L2VideoComponent,
    Week2L2DiscussionComponent,
    Week2L2ActivityComponent,
    Week1L2VideoTabComponent,
    ConfidenceWeek2L3Component,
    ConfidenceWeek3Component,
    ConfidenceWeek3L1Component,
    ConfidenceWeek3L2Component,
    Week3L2ActivityComponent,
    Week3L2VideoComponent,
    Week3L2DiscussionComponent,
    ConfidenceWeek3L3Component
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
