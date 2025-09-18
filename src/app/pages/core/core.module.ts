import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    ForgotPasswordComponent,
    LoginComponent,
    SignupComponent,
    ResetpasswordComponent,
    TermsandconditionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
