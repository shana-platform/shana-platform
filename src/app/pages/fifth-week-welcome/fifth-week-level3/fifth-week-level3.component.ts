import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-week-level3',
  templateUrl: './fifth-week-level3.component.html',
  styleUrls: ['./fifth-week-level3.component.css']
})
export class FifthWeekLevel3Component implements OnInit {
  suggestions = [
    { title: "💡 Here’s what another learner shared:", text: "I want to get better at listening in class.", reaction: 'Great goals help us grow a little every day'},
    { title: "💡 Here’s one idea:", text: "My big sister can help me remember to practice.”", reaction: 'It is okay to ask for help. Helpers make goals easier to reach!'},
    { title: "💡 Think about this::", text: "Goals give us something to work towards. They help us stay focused and feel proud when we try.", reaction: 'That’s a powerful thought'}
  ];

  reactions: string[] = [
    "3 stars 🌟 earned",
    "🤓 3 stars 🌟 earned",
    "💪 3 stars 🌟 earned"
  ];

  currentQuestionIndex = 0;
  studentInput = '';
  previousAnswers: string[] = [];
  showReactionModal = false;
  currentReaction = '';
  showSuggestion = false;
  sessionComplete = false;
  questions = [
    "What’s one thing you’d like to get better at?",
    "Who can help you with that?",
    "Why is it good to have a goal?"
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
    }, 2500);
    this.showSuggestion = true;
    setTimeout(() => {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.showSuggestion = false;
      } else {
        this.sessionComplete = true;
      }
    }, 4500);
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
