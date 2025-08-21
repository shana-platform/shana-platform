import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-week-level3',
  templateUrl: './fourth-week-level3.component.html',
  styleUrls: ['./fourth-week-level3.component.css']
})
export class FourthWeekLevel3Component implements OnInit {
  suggestions = [
    { title: "💡 Here’s what another learner shared:", text: "I packed my school bag without being told." },
    { title: "💡 Think about this:", text: "Noticing our wins helps us feel good about ourselves and try more." },
    { title: "💡 Yes! One learner said:", text: "I did not win the quiz, but I was proud I raised my hand and tried." }
  ];

  reactions: string[] = [
    "Even small wins matter. Celebrate them! 3 stars 🌟 earned",
    "You are your own cheerleader! 🤓 3 stars 🌟 earned",
    "Trying means you are learning — and that is something to be proud of! 💪 3 stars 🌟 earned"
  ];

  currentQuestionIndex = 0;
  studentInput = '';
  previousAnswers: string[] = [];
  showReactionModal = false;
  currentReaction = '';
  showSuggestion = false;
  sessionComplete = false;
  questions = [
    "What made you feel proud this week?",
    "Why is it good to notice our own wins?",
    "Do you have a strength you'd like to grow?"
  ];
  constructor() { }

  ngOnInit(): void {
  }

  submitAnswer() {
    if (!this.studentInput.trim()) return;
    this.previousAnswers[this.currentQuestionIndex] = this.studentInput;
    this.studentInput = "";
    this.showReactionModal = true;
    this.currentReaction = this.reactions[Math.floor(Math.random() * this.reactions.length)];
    setTimeout(() => {
      this.showReactionModal = false;
    }, 1500);
    this.showSuggestion = true;
    setTimeout(() => {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.showSuggestion = false;
      } else {
        this.sessionComplete = true;
      }
    }, 3500);
  }
  
  replaySession() {
    this.currentQuestionIndex = 0;
    this.studentInput = '';
    this.previousAnswers = [];
    this.showReactionModal = false;
    this.showSuggestion = false;
    this.sessionComplete = false;
  }
}
