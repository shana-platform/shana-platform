import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private baseUrl = 'http://localhost:3000/api/modules';

  constructor(private http: HttpClient) {}

  // 🔹 Get all modules
  getAllModules(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  // 🔹 Get module by ID
  getModuleById(moduleId: number | any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${moduleId}`);
  }

  // 🔹 Create module
  createModule(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // 🔹 Update module
  updateModule(moduleId: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${moduleId}`, data);
  }

  // 🔹 Get lessons inside a module
  getLessonsByModule(moduleId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${moduleId}/lessons`);
  }

  deleteModule(id: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // getAllModulesForStudent(studentEmail: string): Module[] {
  //   return MODULES.map(m => ({
  //     ...m,
  //     completed: m.completedBy.includes(studentEmail)
  //   }));
  // }  
}