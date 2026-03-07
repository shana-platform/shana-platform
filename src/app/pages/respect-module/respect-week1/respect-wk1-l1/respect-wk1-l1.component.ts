import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respect-wk1-l1',
  templateUrl: './respect-wk1-l1.component.html',
  styleUrls: ['./respect-wk1-l1.component.css']
})
export class RespectWk1L1Component implements OnInit {
  activeTab: 'video' | 'discussion' | 'activity' = 'discussion';
  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: 'video' | 'discussion' | 'activity'): void {
    this.activeTab = tab;
  }
}
