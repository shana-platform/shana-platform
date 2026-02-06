import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empathy-wk2-l3',
  templateUrl: './empathy-wk2-l3.component.html',
  styleUrls: ['./empathy-wk2-l3.component.css']
})
export class EmpathyWk2L3Component implements OnInit {
  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  completeLesson() {
    this.showModal = true;
  }
}
