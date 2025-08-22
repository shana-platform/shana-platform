import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-week-level1',
  templateUrl: './third-week-level1.component.html',
  styleUrls: ['./third-week-level1.component.css']
})
export class ThirdWeekLevel1Component implements OnInit {
  questions = [
    { text: 'What did you choose to wear today?', answered: false, answer: '', tempAnswer: '' },
    { text: 'Did you choose your own breakfast?', answered: false, answer: '', tempAnswer: '' }
  ];

  submitAnswer(index: number) {
    const q = this.questions[index];
    if (q.tempAnswer.trim() !== '') {
      q.answer = q.tempAnswer;
      q.answered = true;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
