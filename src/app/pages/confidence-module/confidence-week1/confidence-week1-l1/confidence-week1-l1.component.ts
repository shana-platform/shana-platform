import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confidence-week1-l1',
  templateUrl: './confidence-week1-l1.component.html',
  styleUrls: ['./confidence-week1-l1.component.css']
})
export class ConfidenceWeek1L1Component implements OnInit {
  shineText = '';

  constructor() { }

  ngOnInit(): void {
  }

  addShine() {
    if (this.shineText.trim()) {
      console.log('Added:', this.shineText);
      this.shineText = '';
    }
  }
}
