import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-week-level3',
  templateUrl: './second-week-level3.component.html',
  styleUrls: ['./second-week-level3.component.css']
})
export class SecondWeekLevel3Component implements OnInit {
  questions = [
    "What are some things you're good at?",
    "Can being kind or helpful be a strength too?",
    "Do you have a strength you'd like to grow?"
  ];
  
  currentQuestionIndex = 0;
  studentInput = '';
  completedAnswers: string[] = [];
  sessionComplete = false;
  answers: string[] = [];
  conversation: { role: 'teacher' | 'student'; message: string }[] = [];
  previousAnswers: string[] = [];
//   answers: string[] = [];
// previousAnswers: string[] = [];

  constructor() { }

  ngOnInit(): void {
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
  
  
  // submitAnswer() {
  //   if (!this.studentInput.trim()) return;
  //   this.conversation.push({ role: 'student', message: this.studentInput });
  //   this.previousAnswers.push(this.studentInput);
    
  //   this.studentInput = '';
  //   if (this.currentQuestionIndex < this.questions.length - 1) {
  //     this.currentQuestionIndex++;
  //     this.conversation.push({ role: 'teacher', message: this.questions[this.currentQuestionIndex] });
  //   } else {
  //     this.sessionComplete = true;
  //   }
  // }

  replaySession() {
    this.currentQuestionIndex = 0;
    this.studentInput = '';
    this.conversation = [{ role: 'teacher', message: this.questions[0] }];
    this.previousAnswers = [];
    this.sessionComplete = false;
  }
}
