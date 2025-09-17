import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  submitted = false;
   constructor(private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.passwordMatchValidator }
    );
  }
  ngOnInit(): void {
  }




  get f(): { [key: string]: AbstractControl } {
    return this.resetPasswordForm.controls;
  }

  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    this.submitted = true;
    if (this.resetPasswordForm.invalid) return;

    console.log('New password set:', this.resetPasswordForm.value.password);
    // 👉 Call API service to update password
  }
}

