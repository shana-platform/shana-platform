import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empathy-wk3-l3',
  templateUrl: './empathy-wk3-l3.component.html',
  styleUrls: ['./empathy-wk3-l3.component.css']
})
export class EmpathyWk3L3Component implements OnInit {
  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  completeLesson() {
    this.showModal = true;
  }
}
