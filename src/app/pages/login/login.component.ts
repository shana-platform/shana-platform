import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  loginForm!: FormGroup;
  saving:boolean = false;
  currentYear = new Date().getFullYear()

  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
   }

   togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

login() {
  this.saving = true;
    console.log('login')
    if(this.loginForm.invalid){
      alert('please provide email and password');
      return
    }
    this.authService.login(this.loginForm.value).subscribe({
      next: (res:any) => {
        this.saving = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err)
        alert('Invalid email or password');
        this.saving = false;
      }
    });
  }
}
