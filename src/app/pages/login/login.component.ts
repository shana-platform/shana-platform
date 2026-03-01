import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  currentYear = new Date().getFullYear()

  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


  ngOnInit() { }

  login() {
    this.router.navigate(['/dashboard']);
  }

  // login() {
  //   this.authService.login(this.credentials).subscribe({
  //     next: () => {
  //       this.router.navigate(['/dashboard']);
  //     },
  //     error: (err) => {
  //       alert('Invalid credentials');
  //     }
  //   });
  // }
}
