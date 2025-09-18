import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  role="student"

  constructor(private router: Router, private fb: FormBuilder,private http:HttpService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


  ngOnInit() { }

  login() {
    if(this.role == 'student'){
      this.router.navigate(['/user']);
      this.http.localData('role','user','set')

    }else{
      this.http.localData('role','trainer','set')
      this.router.navigate(['/trainer']);
    }
  }

  selectRole(role:string){
    this.role = role
  }

    get f(): { [key: string]: AbstractControl } {
      return this.loginForm.controls;
    }
}
