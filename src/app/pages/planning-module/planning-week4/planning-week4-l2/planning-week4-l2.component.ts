import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-week4-l2',
  templateUrl: './planning-week4-l2.component.html',
  styleUrls: ['./planning-week4-l2.component.css']
})
export class PlanningWeek4L2Component implements OnInit {
  activeTab: 'video' | 'discussion' | 'activity' = 'activity';
  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: 'video' | 'discussion' | 'activity'): void {
    this.activeTab = tab;
  }
}
