import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planning-wk2-l2-activity',
  templateUrl: './planning-wk2-l2-activity.component.html',
  styleUrls: ['./planning-wk2-l2-activity.component.css']
})
export class PlanningWk2L2ActivityComponent implements OnInit {
  totalTasks = 6;

  planner = {
    morning: [
      { text: 'Morning stretch & meditation', done: false },
      { text: 'Healthy breakfast', done: true }
    ],
    afternoon: [
      { text: 'Work on creative project', done: false },
      { text: 'Lunch with friends', done: false }
    ],
    evening: [
      { text: 'Prepare a nice dinner', done: false },
      { text: 'Read a book', done: false }
    ]
  };

  newTask = {
    morning: '',
    afternoon: '',
    evening: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get completedCount(): number {
    const allTasks = [
      ...this.planner.morning,
      ...this.planner.afternoon,
      ...this.planner.evening
    ];
    return allTasks.filter(t => t.done).length;
  }

  get progressPercent(): number {
    return Math.round((this.completedCount / this.totalTasks) * 100);
  }

  toggleTask(task: any) {
    task.done = !task.done;
  }

  addTask(section: 'morning' | 'afternoon' | 'evening') {
    if (!this.newTask[section].trim()) return;

    this.planner[section].push({
      text: this.newTask[section],
      done: false
    });

    this.totalTasks++;
    this.newTask[section] = '';
  }
}
