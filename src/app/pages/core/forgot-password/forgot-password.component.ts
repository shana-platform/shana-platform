import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder,private router:Router) {
      this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
   }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.forgotPasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.forgotPasswordForm.invalid) return;
    this.router.navigate(['/resetPassword'])
    console.log('Reset link sent to:', this.forgotPasswordForm.value.email);
    // 👉 Call API service to send reset email
  }

}
