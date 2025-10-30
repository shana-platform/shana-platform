import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confidence-week3-l2',
  templateUrl: './confidence-week3-l2.component.html',
  styleUrls: ['./confidence-week3-l2.component.css']
})
export class ConfidenceWeek3L2Component implements OnInit {
  activeTab: 'video' | 'discussion' | 'activity' = 'video';
  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: 'video' | 'discussion' | 'activity'): void {
    this.activeTab = tab;
  }
}
