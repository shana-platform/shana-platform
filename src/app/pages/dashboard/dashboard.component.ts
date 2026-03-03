import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/core/services/module.service';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students: any;
  modules: any[] = [];
  selectedModule: any;
  loading = false;
  errorMessage = '';

constructor(private studentService: StudentService, private moduleService: ModuleService) { }

ngOnInit(): void {
  this.loadStudents();
  this.loadModules();
}

loadStudents() {
  this.studentService.getStudents().subscribe({
    next: (res) => {
      this.students = res;
    },
    error: (err) => {
      console.error(err);
    }
  });
}

createStudent(data: any) {
  this.studentService.createStudent(data).subscribe({
    next: (res) => {
      this.loadStudents();
    },
    error: (err) => {
      console.error(err);
    }
  });
}

deleteStudent(id: string) {
  this.studentService.deleteStudent(id).subscribe({
    next: () => {
      this.loadStudents();
    },
    error: (err) => {
      console.error(err);
    }
  });
}

  loadModules(): void {
    this.loading = true;

    this.moduleService.getAllModules().subscribe({
      next: (res) => {
        this.modules = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to load modules';
        this.loading = false;
      }
    });
  }

  getModule(id: string): void {
    this.moduleService.getModuleById(id).subscribe({
      next: (res) => {
        this.selectedModule = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  createModule(moduleData: any): void {
    this.moduleService.createModule(moduleData).subscribe({
      next: (res) => {
        console.log('Module created', res);
        this.loadModules();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updateModule(id: string, moduleData: any): void {
    this.moduleService.updateModule(id, moduleData).subscribe({
      next: (res) => {
        this.loadModules();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteModule(id: string): void {
    if (!confirm('Are you sure you want to delete this module?')) {
      return;
    }
    this.moduleService.deleteModule(id).subscribe({
      next: () => {
        this.loadModules();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
