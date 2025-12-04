import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-week2-level2',
  templateUrl: './planning-week2-level2.component.html',
  styleUrls: ['./planning-week2-level2.component.css']
})
export class PlanningWeek2Level2Component implements OnInit {
  activeTab: 'video' | 'discussion' | 'activity' = 'video';
  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: 'video' | 'discussion' | 'activity'): void {
    this.activeTab = tab;
  }
}
