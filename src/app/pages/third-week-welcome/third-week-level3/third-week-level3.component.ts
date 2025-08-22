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
  
  // store correct answers
  correctAnswers = [
    "Because our choices help us learn and grow",
    "", // open-ended (no validation here, just accept)
    "Yes, planning helps us feel ready and focused"
  ];

  currentQuestionIndex = 0;
  studentInput = '';
  completedAnswers: string[] = [];
  sessionComplete = false;
  answers: string[] = [];
  previousAnswers: string[] = [];
  showQ2Hint: boolean = false;
  showFeedback = false;
  feedbackMessage = '';
  feedbackType: 'success' | 'error' | '' = '';
  score = 0;

  constructor() {}

  ngOnInit(): void {}

  updateInput(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.value;

    if (checkbox.checked) {
      if (!this.studentInput.includes(value)) {
        this.studentInput = this.studentInput
          ? `${this.studentInput}, ${value}`
          : value;
      }
    } else {
      const items = this.studentInput
        .split(', ')
        .filter(item => item !== value);
      this.studentInput = items.join(', ');
    }
  }

submitAnswer() {
  // basic empty validation
  if (!this.studentInput || this.studentInput.trim() === '') {
    this.feedbackMessage = '⚠️ Please type or select an answer before submitting.';
    this.showFeedback = true;
    setTimeout(() => (this.showFeedback = false), 1500);
    return;
  }

  const i = this.currentQuestionIndex;
  const correct = this.correctAnswers[i];

  // Q2 special two-step flow (no fixed correct answer)
  if (i === 1) {
    if (!this.showQ2Hint) {
      // first submit on Q2 → show hint and award points, do not advance
      this.showQ2Hint = true;
      this.score += 3;
      this.feedbackMessage = "✨ Great reflection! You've earned 3 pts.";
      this.showFeedback = true;
      setTimeout(() => (this.showFeedback = false), 1500);
      return;
    } else {
      // second submit on Q2 → hide hint and advance
      this.showQ2Hint = false;
      this.feedbackMessage = "🌟 Great, you've earned 3 pts!";
      this.showFeedback = true;
      setTimeout(() => (this.showFeedback = false), 1500);
      this.goToNextQuestion();
      return;
    }
  }

  // Q1 & Q3 validation (single correct answer)
  if (typeof correct === 'string') {
    if (this.studentInput === correct) {
      this.score += 3;
      this.feedbackMessage = "🎉 Great! You earned 3 pts!";
      this.showFeedback = true;
      setTimeout(() => {
        this.showFeedback = false;
        this.goToNextQuestion();
      }, 1500);
    } else {
      // WRONG → stay on same question, let them try again
      this.feedbackMessage = "❌ Sorry, try again!";
      this.showFeedback = true;
      setTimeout(() => (this.showFeedback = false), 1200);
      // optional: keep their selection so they can switch it, or clear it:
      // this.studentInput = '';
    }
    return;
  }

  // Fallback (shouldn't hit because Q2 handled above)
  this.goToNextQuestion();
}


goToNextQuestion() {
  this.answers[this.currentQuestionIndex] = this.studentInput;
  this.studentInput = '';

  if (this.currentQuestionIndex < this.questions.length - 1) {
    this.currentQuestionIndex++;
  } else {
    this.sessionComplete = true;
    this.previousAnswers = [...this.answers];
  }
}

getSubmitButtonText(): string {
  if (this.currentQuestionIndex === 1 && !this.showQ2Hint) {
    return "Submit & Show Hint";
  }
  return "Submit";
}

  replaySession() {
    this.currentQuestionIndex = 0;
    this.studentInput = '';
    this.previousAnswers = [];
    this.sessionComplete = false;
    this.score = 0;
  }
}
