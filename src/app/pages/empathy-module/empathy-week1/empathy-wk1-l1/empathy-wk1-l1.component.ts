import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empathy-wk1-l1',
  templateUrl: './empathy-wk1-l1.component.html',
  styleUrls: ['./empathy-wk1-l1.component.css']
})
export class EmpathyWk1L1Component implements OnInit {
  activeTab: 'video' | 'discussion' | 'activity' = 'video';
  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: 'video' | 'discussion' | 'activity'): void {
    this.activeTab = tab;
  }
}
