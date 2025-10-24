import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Question {
  emoji: string;
  text: string;
  options: { emoji: string; label: string }[];
}

@Component({
  selector: 'app-confidence-week2-l1',
  templateUrl: './confidence-week2-l1.component.html',
  styleUrls: ['./confidence-week2-l1.component.css']
})
export class ConfidenceWeek2L1Component implements OnInit {

  // index of the current question shown
  currentQuestionIndex = 0;

  // per-question answers; null = not answered yet, otherwise stores selected option index
  
  // convenience: selected option index for the currently displayed question
  selectedOptionIndex: number | null = null;
  
  // timer state
  timerRunning = false;
  timeElapsed = 0;
  timerInterval: any;
  
  questions: Question[] = [
    {
      emoji: '🤔',
      text: 'Would you try a new fruit?',
      options: [
        { emoji: '👍', label: 'Yes!' },
        { emoji: '👎', label: 'No' },
        { emoji: '🤷', label: 'Maybe' },
      ],
    },
    {
      emoji: '💃',
      text: 'Would you try dancing in front of the group?',
      options: [
        { emoji: '🖌️', label: 'Yes!' },
        { emoji: '😅', label: 'Not Sure' },
        { emoji: '🙅‍♀️', label: 'No' },
      ],
    },
    {
      emoji: '🎤',
      text: 'Would you try speaking in a funny voice?',
      options: [
        { emoji: '😎', label: 'Absolutely!' },
        { emoji: '😬', label: 'Maybe' },
        { emoji: '🙈', label: 'No way!' },
      ],
    },
  ];
  answers: (number | null)[] = new Array(this.questions.length).fill(null);
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /* ---- Derived properties ---- */

  // how many questions have been answered
  get answeredCount(): number {
    return this.answers.filter((a) => a !== null).length;
  }

  // label like "0/3", "1/3", etc. (based on answered count)
  get scenarioLabel(): string {
    return `${this.answeredCount}/${this.questions.length}`;
  }

  // progress percent based on answered questions
  get progressPercentage(): number {
    if (this.questions.length === 0) return 0;
    return (this.answeredCount / this.questions.length) * 100;
  }

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  get nextButtonLabel(): string {
    return this.currentQuestionIndex === this.questions.length - 1
      ? 'Finish'
      : 'Next';
  }

  /* ---- Actions ---- */

  onAnswerSelect(option: any, optionIndex: number) {
    // start timer on first answer
    if (!this.timerRunning) {
      this.startTimer();
    }

    // mark this question as answered (persist the selected option)
    this.answers[this.currentQuestionIndex] = optionIndex;
    this.selectedOptionIndex = optionIndex;
  }

  nextQuestion() {
    // if not last question, move forward
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      // restore previously selected option for the new current question
      this.selectedOptionIndex = this.answers[this.currentQuestionIndex];
    } else {
      // Last question -> Finish
      // ensure timer stops
      this.stopTimer();

      // If you want to ensure full progress even when last question wasn't explicitly answered,
      // you can optionally mark it answered here. I will NOT auto-mark it by default,
      // but if you'd like that behavior, uncomment the following lines:
      //
      // if (this.answers[this.currentQuestionIndex] === null) {
      //   this.answers[this.currentQuestionIndex] = -1; // -1 means "no selection" but counts as answered
      // }

      // UI already uses answeredCount to compute progress; since selection updates immediately
      // progress will show correctly. Show completion action after a tiny delay so UI paints.
      setTimeout(() => {
        alert('🎉 You finished all scenarios!');
      }, 100);
      this.router.navigate(['/confidence-week2-l2']);
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      // restore previously selected option for this question
      this.selectedOptionIndex = this.answers[this.currentQuestionIndex];
    }
  }

  /* ---- Timer ---- */

  startTimer() {
    this.timerRunning = true;
    this.timerInterval = setInterval(() => {
      this.timeElapsed++;
    }, 1000);
  }

  stopTimer() {
    this.timerRunning = false;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}
