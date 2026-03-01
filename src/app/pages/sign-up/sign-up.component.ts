import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  // Object to collect data via ngModel
  user = {
    // firstName: '',
    // lastName: '',
    email: '',
    password: '',
    // profileImage: null as File | null,
  };
  imagePreview: string | ArrayBuffer | null = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  // Handle File Selection for Profile Image
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // this.user.profileImage = file;

      // Create a preview for the UI
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  register() {
    // if (!this.user.email || !this.user.password || !this.user.firstName) {
    //   alert('Please fill in all required fields.');
    //   return;
    // }
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
}
