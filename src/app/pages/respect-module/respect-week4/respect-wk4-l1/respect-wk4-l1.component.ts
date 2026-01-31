import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respect-wk4-l1',
  templateUrl: './respect-wk4-l1.component.html',
  styleUrls: ['./respect-wk4-l1.component.css']
})
export class RespectWk4L1Component implements OnInit {
  activeTab: 'video' | 'discussion' | 'activity' = 'video';
  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: 'video' | 'discussion' | 'activity'): void {
    this.activeTab = tab;
  }
}
