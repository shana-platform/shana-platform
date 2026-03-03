import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // 🔹 Create lesson inside module
  createLesson(moduleId: number, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/modules/${moduleId}/lessons`, data);
  }

  // 🔹 Update lesson
  updateLesson(lessonId: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/lessons/${lessonId}`, data);
  }

  // 🔹 Get lesson by ID
  getLessonById(lessonId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/lessons/${lessonId}`);
  }

  // 🔹 Get lessons for a student
  getStudentLessons(studentId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/students/${studentId}/lessons`);
  }

  // 🔹 Update student lesson progress
  updateStudentLesson(studentId: number, lessonId: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/students/${studentId}/lessons/${lessonId}`, data);
  }
}