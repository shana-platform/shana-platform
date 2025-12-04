import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-week1-l3',
  templateUrl: './planning-week1-l3.component.html',
  styleUrls: ['./planning-week1-l3.component.css']
})
export class PlanningWeek1L3Component implements OnInit {
  days = [
    { label: 'Day 1', completed: false },
    { label: 'Day 2', completed: false },
    { label: 'Day 3', completed: false }
  ];

  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  get completedCount(): number {
    return this.days.filter(d => d.completed).length;
  }

  toggleDay(index: number) {
    this.days[index].completed = !this.days[index].completed;

    if (this.completedCount === 3) {
      setTimeout(() => {
        this.showModal = true;
      }, 300);
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
