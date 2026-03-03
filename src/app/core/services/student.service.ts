import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:3000/api/students';

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
}