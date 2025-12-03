import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planning-wk1-l2-activity',
  templateUrl: './planning-wk1-l2-activity.component.html',
  styleUrls: ['./planning-wk1-l2-activity.component.css']
})
export class PlanningWk1L2ActivityComponent implements OnInit {
  steps: string[] = ['', '', ''];
  showModal = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  get completedCount(): number {
    return this.steps.filter(step => step.trim() !== '').length;
  }

  openModal() {
    if (this.completedCount === 3) {
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
    // Navigate to next lesson here if needed
    this.router.navigate(['/planning-week1-l3']);
  }
}
