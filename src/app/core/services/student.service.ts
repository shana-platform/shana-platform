import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = `${environment.apiUrl}/students`;

  constructor(private http: HttpClient) {}


  // Get all students
  getStudents(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // Get single student
  getStudentById(id: string | any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Create student
  createStudent(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // Update student
  updateStudent(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // Delete student
  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateUserStats(updates: Partial<{ stars: number, badges: number, trophies: number, modulesCompleted: number }>) {
    const user = JSON.parse(localStorage.getItem('loggedUser') || 'null');
    if (!user) return;
  
    // Update the stats
    user.stars += updates.stars || 0;
    user.badges += updates.badges || 0;
    user.trophies += updates.trophies || 0;
    user.modulesCompleted += updates.modulesCompleted || 0;
  
    // Update USERS array in memory
    // const index = USERS.findIndex(u => u.email === user.email);
    // if (index !== -1) {
    //   USERS[index] = user;
    // }
  
    // Save the updated user in localStorage for dashboard
    localStorage.setItem('loggedUser', JSON.stringify(user));
  
    return user;
  }
}