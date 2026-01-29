import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respect-wk2-l1',
  templateUrl: './respect-wk2-l1.component.html',
  styleUrls: ['./respect-wk2-l1.component.css']
})
export class RespectWk2L1Component implements OnInit {
  activeTab: 'video' | 'discussion' | 'activity' = 'video';
  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: 'video' | 'discussion' | 'activity'): void {
    this.activeTab = tab;
  }
}
