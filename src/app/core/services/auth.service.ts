import { APP_CONFIG } from 'src/app/config/app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private baseUrl = APP_CONFIG.apiUrl;

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  register(userData: any) {
    return this.http.post(`${this.baseUrl}/auth/register`, userData);
  }

login(credentials: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, credentials)
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          if (response.user) {
            localStorage.setItem('loggedUser', JSON.stringify(response.user));
          }
        })
      );
  }

  getLoggedUser() {
    return JSON.parse(localStorage.getItem('loggedUser') || 'null');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }


  getCurrentUser() {
    return this.http.get('/api/me');
  }
}