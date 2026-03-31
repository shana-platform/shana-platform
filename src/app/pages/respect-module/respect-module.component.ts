import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModuleService } from 'src/app/core/services/module.service';
import { ProgressService } from 'src/app/core/services/progress.service';



@Component({
  selector: 'app-respect-module',
  templateUrl: './respect-module.component.html',
  styleUrls: ['./respect-module.component.css']
})
export class RespectModuleComponent implements OnInit {
  adventures = [
    { id: 'week1', title: 'Respect for Self', subtitle: 'Week 1 of 4', link: '/respect-week1', progress: 0 },
    { id: 'week2', title: 'Respect for Others', subtitle: 'Week 2 of 4', link: '/respect-week2', progress: 0 },
    { id: 'week3', title: 'Respect for Belongings', subtitle: 'Week 3 of 4', link: '/respect-week3', progress: 0 },
    { id: 'week4', title: 'Respect for Differences', subtitle: 'Week 4 of 4', link: '/respect-week4', progress: 0 }
  ];

  modules: any[] = []
  user: any;

  constructor(private progressService: ProgressService, private moduleservice: ModuleService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedUser();
    this.progressService.currentProgress$.subscribe(progressMap => {
      this.adventures = this.adventures.map(adv => ({
        ...adv,
        progress: progressMap[adv.id] || 0
      }));
    });
  }
}
