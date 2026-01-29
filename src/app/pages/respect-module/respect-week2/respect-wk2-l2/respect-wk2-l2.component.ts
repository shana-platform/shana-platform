import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respect-wk2-l2',
  templateUrl: './respect-wk2-l2.component.html',
  styleUrls: ['./respect-wk2-l2.component.css']
})
export class RespectWk2L2Component implements OnInit {
  respectfulWords: string[] = ['Please', 'Sorry', 'Thank you'];
  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  
  // Optional: Add interaction when clicking words
  onWordClick(word: string) {
    console.log(`Practicing: ${word}`);
  }

  completeLesson() {
    this.showModal = true;
  }
}
