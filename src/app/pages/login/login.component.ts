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
  loginForm!: FormGroup;
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

//   login() {
//   if (this.loginForm.valid) {
//     this.authService.login(this.loginForm.value)
//       .subscribe({
//         next: (res: any) => {
//           console.log('Login success:', res);

//           localStorage.setItem('token', res.token);

//           this.router.navigate(['/dashboard']);
//         },
//         error: (err) => {
//           console.error('Login failed:', err);
//           alert('Invalid email or password');
//         }
//       });
//   } else {
//     alert('provide email and password');
//   }
// }

// login() {
//   this.authService.login(this.loginForm.value).subscribe({
//     next: (res:any) => {
//       console.log('Logged in user', res);
//       this.router.navigate(['/dashboard']);
//     },
//     error: () => {
//       // alert('provide email and password');
//     }
//   });
// }
login() {
  this.authService.login(this.loginForm.value).subscribe({
    next: (res:any) => {
      // console.log('Logged in user', res);
      this.router.navigate(['/dashboard']);
    },
    error: (err) => {
      alert('Invalid email or password');
    }
  });
}
}
