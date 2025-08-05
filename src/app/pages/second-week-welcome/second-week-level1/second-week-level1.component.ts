import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-week-level1',
  templateUrl: './second-week-level1.component.html',
  styleUrls: ['./second-week-level1.component.css']
})
export class SecondWeekLevel1Component implements OnInit {
  conversation: { role: string; message: string }[] = [];
  studentInput: string = '';
  sessionComplete: boolean = false;
  currentQuestionIndex: number = 0;
  showReactionModal: boolean = false;
currentReaction: string = '';

  questions = [
    'Welcome to our Power Pose warm-up activity! ✨',
    'Let’s start by striking your best superhero pose! What do you feel when you do this pose? 💪',
    'What makes you feel powerful or proud in your everyday life?',
    'What about when you learn something new?',
    'Remember, true power comes from within – kindness, perseverance, learning, and believing in yourself! ✨'
  ];

  teacherReactions = [
    'Wow, 3 stars 🌟 earned',
    'Great! 3 stars 🌟 earned',
    'That’s a powerful thought! 💪 3 stars 🌟 earned',
    'You’re doing great! Keep going! 🧠 3 stars 🌟 earned',
    'Such a smart response! 🤓 3 stars 🌟 earned'
  ];
  currentStep = 0;
  constructor() { }

  ngOnInit() {
    this.addTeacherMessage(this.questions[this.currentStep]);
  }

  addTeacherMessage(message: string) {
    this.conversation.push({ role: 'teacher', message });
  }

  addStudentMessage(message: string) {
    this.conversation.push({ role: 'student', message });
  }

  // submitAnswer() {
  //   if (!this.studentInput.trim()) return;

  //   this.addStudentMessage(this.studentInput.trim());
  //   this.studentInput = '';

  //   this.currentStep++;

  //   if (this.currentStep < this.questions.length) {
  //     setTimeout(() => this.addTeacherMessage(this.questions[this.currentStep]), 500);
  //   } else {
  //     this.sessionComplete = true;
  //   }
  // }

  replaySession() {
    this.conversation = [];
    this.currentQuestionIndex = 0;
    this.sessionComplete = false;
    this.conversation.push({ role: 'teacher', message: this.questions[0] });
  }

  submitAnswer() {
    if (!this.studentInput.trim()) return;
    this.conversation.push({ role: 'student', message: this.studentInput.trim() });
    this.studentInput = '';
    const randomReaction = this.teacherReactions[Math.floor(Math.random() * this.teacherReactions.length)];
    this.currentReaction = randomReaction;
    this.showReactionModal = true;
  }
  
  closeModal(){
    this.showReactionModal = false;
    this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.questions.length) {
        this.conversation.push({
          role: 'teacher',
          message: this.questions[this.currentQuestionIndex]
        });
      } else {
        this.sessionComplete = true;
      }
  }
}
