import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-week-level3',
  templateUrl: './second-week-level3.component.html',
  styleUrls: ['./second-week-level3.component.css']
})
export class SecondWeekLevel3Component implements OnInit {
  suggestions = [
    { title: "💡 Here’s what another learner said:", text: "I’m good at building with blocks and remembering stories.” Everyone has something they shine at — big or small!" },
    { title: "💡 Think about this:", text: "Yes! Helping others, listening, and sharing are powerful strengths that make the world better." },
    { title: "💡 Here’s a great example:", text: "I want to get better at speaking in front of people." }
  ];

  reactions: string[] = [
    "Wow, 3 stars 🌟 earned",
    "Such a smart response! 🤓 3 stars 🌟 earned",
    "That’s a powerful thought! 💪 3 stars 🌟 earned"
  ];

  currentQuestionIndex = 0;
  studentInput = '';
  previousAnswers: string[] = [];
  showReactionModal = false;
  currentReaction = '';
  showSuggestion = false;
  sessionComplete = false;
  questions = [
    "What are some things you're good at?",
    "Can being kind or helpful be a strength too?",
    "Do you have a strength you'd like to grow?"
  ];

  constructor() { }

  ngOnInit(): void { }

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
