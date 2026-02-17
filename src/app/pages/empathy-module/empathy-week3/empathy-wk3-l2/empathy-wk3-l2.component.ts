import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empathy-wk3-l2',
  templateUrl: './empathy-wk3-l2.component.html',
  styleUrls: ['./empathy-wk3-l2.component.css']
})
export class EmpathyWk3L2Component implements OnInit {
  activeTab: 'video' | 'discussion' | 'activity' = 'video';
  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: 'video' | 'discussion' | 'activity'): void {
    this.activeTab = tab;
  }
}
