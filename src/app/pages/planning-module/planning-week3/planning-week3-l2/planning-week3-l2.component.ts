import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-week3-l2',
  templateUrl: './planning-week3-l2.component.html',
  styleUrls: ['./planning-week3-l2.component.css']
})
export class PlanningWeek3L2Component implements OnInit {
  activeTab: 'video' | 'discussion' | 'activity' | 'lesson' = 'activity';
  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: 'video' | 'discussion' | 'activity' | 'lesson'): void {
    this.activeTab = tab;
  }
}
