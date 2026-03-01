import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  imagePreview: string | ArrayBuffer | null = null;
  user = {
    image: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


onFileSelected(event: any) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }
}

register() {
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
