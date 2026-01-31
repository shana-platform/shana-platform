import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respect-wk3-l1',
  templateUrl: './respect-wk3-l1.component.html',
  styleUrls: ['./respect-wk3-l1.component.css']
})
export class RespectWk3L1Component implements OnInit {
  activeTab: 'video' | 'discussion' | 'activity' = 'video';
  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: 'video' | 'discussion' | 'activity'): void {
    this.activeTab = tab;
  }
}
