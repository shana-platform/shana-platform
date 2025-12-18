import { Component, OnInit } from '@angular/core';
interface Task {
  text: string;
  completed: boolean;
}

interface DayPlan {
  day: string;
  tasks: Task[];
}

@Component({
  selector: 'app-planning-wk4-l2-activity',
  templateUrl: './planning-wk4-l2-activity.component.html',
  styleUrls: ['./planning-wk4-l2-activity.component.css']
})
export class PlanningWk4L2ActivityComponent implements OnInit {
  days: DayPlan[] = [
    { day: 'Monday', tasks: [] },
    { day: 'Tuesday', tasks: [] },
    { day: 'Wednesday', tasks: [] },
    { day: 'Thursday', tasks: [] },
    { day: 'Friday', tasks: [] },
    { day: 'Saturday', tasks: [] },
    { day: 'Sunday', tasks: [] },
  ];

  celebrationText = '';

  constructor() { }

  ngOnInit() { }

  addTask(day: DayPlan) {
    const task = prompt(`Add a task for ${day.day}`);
    if (task) {
      day.tasks.push({ text: task, completed: false });
    }
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }

  get totalTasks(): number {
    return this.days.reduce((sum, d) => sum + d.tasks.length, 0);
  }

  get completedTasks(): number {
    return this.days.reduce(
      (sum, d) => sum + d.tasks.filter(t => t.completed).length,
      0
    );
  }

  get progressPercent(): number {
    return this.totalTasks === 0
      ? 0
      : Math.round((this.completedTasks / this.totalTasks) * 100);
  }

  get celebrationUnlocked(): boolean {
    return this.totalTasks > 0 && this.completedTasks === this.totalTasks;
  }
}
