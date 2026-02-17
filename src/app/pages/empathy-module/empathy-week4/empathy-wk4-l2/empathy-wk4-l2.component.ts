import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empathy-wk4-l2',
  templateUrl: './empathy-wk4-l2.component.html',
  styleUrls: ['./empathy-wk4-l2.component.css']
})
export class EmpathyWk4L2Component implements OnInit {
  activeTab: 'video' | 'discussion' = 'video';
  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: 'video' | 'discussion'): void {
    this.activeTab = tab;
  }
}
