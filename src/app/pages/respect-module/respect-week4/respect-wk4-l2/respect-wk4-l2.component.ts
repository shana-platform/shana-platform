import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respect-wk4-l2',
  templateUrl: './respect-wk4-l2.component.html',
  styleUrls: ['./respect-wk4-l2.component.css']
})
export class RespectWk4L2Component implements OnInit {
  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  completeLesson() {
    this.showModal = true;
  }
}
