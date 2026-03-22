import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    imageUrl: '',
  };
  imagePreview: string | ArrayBuffer | null = null;
  hidePassword = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

// Handle File Selection for Profile Image
onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.user.imageUrl = URL.createObjectURL(file);
    this.imagePreview = this.user.imageUrl;
  }
}

  register() {
    if (!this.user.email || !this.user.password || !this.user.firstName || !this.user.lastName) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log('Account Data Collected:', this.user);
    this.authService.register(this.user).subscribe({
      next: () => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  // register() {
  //   this.authService.register(this.user).subscribe({
  //     next: () => {
  //       alert('Account created successfully! Now you can login.');
  //       this.router.navigate(['/login']);
  //     },
  //     error: (err) => {
  //       alert(err?.error?.message);
  //     }
  //   });
  // }
}
