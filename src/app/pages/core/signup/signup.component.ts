import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,private router:Router) {
    this.signupForm = this.fb.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.passwordMatchValidator }
    );
  }

  ngOnInit(): void {
  }

    get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

    // Custom validator for password confirmation
  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
    // this.router.navigate(['/dashboard'])

    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    this.router.navigate(['/dashboard'])
    console.log('Form submitted:', this.signupForm.value);
    // 👉 Call your API service here
  }
}
