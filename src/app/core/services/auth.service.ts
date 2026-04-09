import { APP_CONFIG } from 'src/app/config/app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = APP_CONFIG.apiUrl;

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

  // --- Added Method ---
  updateUserStats(updates: Partial<{ stars: number, badges: number, trophies: number, modulesCompleted: number }>) {
    // 1. Fetch the current user using your existing method
    const user = this.getLoggedUser();
    if (!user) return;
  
    // 2. Safely add the incoming updates to the existing totals
    user.stars = (user.stars || 0) + (updates.stars || 0);
    user.badges = (user.badges || 0) + (updates.badges || 0);
    user.trophies = (user.trophies || 0) + (updates.trophies || 0);
    user.modulesCompleted = (user.modulesCompleted || 0) + (updates.modulesCompleted || 0);
  
    // 3. Save the updated user back to localStorage
    localStorage.setItem('loggedUser', JSON.stringify(user));
  
    return user;
  }
}