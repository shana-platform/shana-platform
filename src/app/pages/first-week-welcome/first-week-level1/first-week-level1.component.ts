import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-week-level1',
  templateUrl: './first-week-level1.component.html',
  styleUrls: ['./first-week-level1.component.css']
})
export class FirstWeekLevel1Component implements OnInit {
  name: string = '';
  interest: string = '';
  students: { name: string; interest: string }[] = [];
  colorPalette: string[] = ['#34d399', '#ec4899', '#60a5fa', '#fbbf24'];
  showFollowUpCard: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  addStudent() {
    if (!this.name.trim() || !this.interest.trim()) return;

    this.students.push({ name: this.name.trim(), interest: this.interest.trim() });

    this.name = '';
    this.interest = '';
    this.showFollowUpCard = true; // show Teacher Follow-up section
  }

  get uniqueInterests(): string[] {
    const interests = this.students.map(s => s.interest.toLowerCase());
    return Array.from(new Set(interests));
  }
}
