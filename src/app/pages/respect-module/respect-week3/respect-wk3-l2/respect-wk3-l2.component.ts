import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respect-wk3-l2',
  templateUrl: './respect-wk3-l2.component.html',
  styleUrls: ['./respect-wk3-l2.component.css']
})
export class RespectWk3L2Component implements OnInit {
  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  completeLesson() {
    this.showModal = true;
  }
}
