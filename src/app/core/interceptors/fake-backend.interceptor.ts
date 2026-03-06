import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { User, USERS } from 'src/app/fake-db';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Simulate server delay
    const { url, method, body } = request;

    // REGISTER
    if (url.endsWith('/api/register') && method === 'POST') {
      const newUser: User = body;

      // Check if email exists
      if (USERS.find(u => u.email === newUser.email)) {
        return throwError(() => ({
          status: 400,
          error: { message: 'Email already exists' }
        }));
      }

      newUser.id = new Date().getTime(); // simple id
      USERS.push(newUser); // store in memory

      return of(new HttpResponse({ status: 200, body: { message: 'Account created successfully' } }));
    }

    // LOGIN
    if (url.endsWith('/api/login') && method === 'POST') {
      const { email, password } = body;
      const user = USERS.find(u => u.email === email && u.password === password);

      if (!user) {
        return throwError(() => ({
          status: 401,
          error: { message: 'Invalid email or password. Please create an account.' }
        }));
      }

      return of(new HttpResponse({ status: 200, body: user }));
    }

    // pass through other requests
    return next.handle(request);
  }
}