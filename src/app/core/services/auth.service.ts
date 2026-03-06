import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  // register(userData: any) {
  //   console.log(userData)
  //   return this.http.post(`${this.baseUrl}/register`, userData);
  // }

  // login(credentials: any) {
  //   return this.http.post(`${this.baseUrl}/login`, credentials)
  //     .pipe(
  //       tap((response: any) => {
  //         localStorage.setItem('token', response.token);
  //       })
  //     );
  // }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }


  // FAKE API CREATION
  register(data:any) {
    return this.http.post('/api/register', data);
  }

  // login(data:any) {
  //   return this.http.post('/api/login', data);
  // }

  getCurrentUser() {
    return this.http.get('/api/me');
  }

  login(data:any) {
    // console.log(data)
    return this.http.post('/api/login', data).pipe(
      tap((user:any) => {
        localStorage.setItem('loggedUser', JSON.stringify(user));
      })
    );
  }

  getLoggedUser() {
    return JSON.parse(localStorage.getItem('loggedUser') || 'null');
  }
}