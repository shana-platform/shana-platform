import { Component, OnInit } from '@angular/core';
import { ProgressService } from 'src/app/core/services/progress.service';

@Component({
  selector: 'app-respect-wk1-l2',
  templateUrl: './respect-wk1-l2.component.html',
  styleUrls: ['./respect-wk1-l2.component.css']
})
export class RespectWk1L2Component implements OnInit {
  completedDays = 3;
  showModal = false;
  totalDays = 7;

  constructor(private progressService: ProgressService) { }

  ngOnInit(): void {
  }

  get daysArray() {
    return Array(this.totalDays).fill(0);
  }

  completeLesson() {
    this.showModal = true;
    this.progressService.updateProgress('week1', 25);
  }
}
