import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModuleService } from 'src/app/core/services/module.service';



@Component({
  selector: 'app-respect-module',
  templateUrl: './respect-module.component.html',
  styleUrls: ['./respect-module.component.css']
})
export class RespectModuleComponent implements OnInit {
  modules: any[] = []
  user: any;

  constructor(private authService: AuthService, private moduleservice: ModuleService) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedUser();

    this.modules = this.moduleservice.getAllModulesForStudent(this.user.email);
  }
}
