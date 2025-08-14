import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-week-level3',
  templateUrl: './third-week-level3.component.html',
  styleUrls: ['./third-week-level3.component.css']
})
export class ThirdWeekLevel3Component implements OnInit {
  questions = [
    "Why do we make choices?",
    "How do our choices show who we are?",
    "Can planning our day help us feel more in control?"
  ];
  
  currentQuestionIndex = 0;
  studentInput = '';
  completedAnswers: string[] = [];
  sessionComplete = false;
  answers: string[] = [];
  conversation: { role: 'teacher' | 'student'; message: string }[] = [];
  previousAnswers: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateInput(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.value;

    if (checkbox.checked) {
      // Append if not already in input
      if (!this.studentInput.includes(value)) {
        this.studentInput = this.studentInput
          ? `${this.studentInput}, ${value}`
          : value;
      }
    } else {
      // Remove the unchecked value
      const items = this.studentInput
        .split(', ')
        .filter(item => item !== value);
      this.studentInput = items.join(', ');
    }
  }

  get progressPercentage() {
    return ((this.currentQuestionIndex) / this.questions.length) * 100;
  }

  submitAnswer() {
    if (!this.studentInput.trim()) return;
  
    // Save current answer
    this.answers[this.currentQuestionIndex] = this.studentInput;
  
    this.studentInput = '';
  
    // Go to next question or complete
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.sessionComplete = true;
      this.previousAnswers = [...this.answers]; // copy answers for the summary
    }
  }

  replaySession() {
    this.currentQuestionIndex = 0;
    this.studentInput = '';
    this.conversation = [{ role: 'teacher', message: this.questions[0] }];
    this.previousAnswers = [];
    this.sessionComplete = false;
  }

}
