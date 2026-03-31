import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  saving:boolean = false;

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

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.user.imageUrl = URL.createObjectURL(file);
      this.imagePreview = this.user.imageUrl;
    }
  }

  register() {
    this.saving = true;
    if (!this.user.email || !this.user.password || !this.user.firstName || !this.user.lastName) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log('Account Data Collected:', this.user);
    this.authService.register(this.user).subscribe({
      next: () => {
        this.saving = false;
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        this.saving = false;
      }
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
