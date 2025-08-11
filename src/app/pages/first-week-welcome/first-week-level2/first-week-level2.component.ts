import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-week-level2',
  templateUrl: './first-week-level2.component.html',
  styleUrls: ['./first-week-level2.component.css']
})
export class FirstWeekLevel2Component implements OnInit {
  videoPlaying = false;
  selectedTab: string = 'introduction';
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  studentName = '';
  selectedQuestion = '';
  studentResponse = '';
  showModal: boolean = false;
  questions: string[] = [
    'What did Mirabel feel at first?',
    'How did she learn what makes her special?',
    'Is it okay to be different from others?'
  ];
  // questions = [
  //   "What are some things you're good at?",
  //   "Can being kind or helpful be a strength too?",
  //   "Do you have a strength you'd like to grow?"
  // ];
  
  currentQuestionIndex = 0;
  studentInput = '';
  completedAnswers: string[] = [];
  sessionComplete = false;
  answers: string[] = [];
  conversation: { role: 'teacher' | 'student'; message: string }[] = [];
  previousAnswers: string[] = [];
//   answers: string[] = [];
// previousAnswers: string[] = [];
  responses: { name: string; question: string; response: string }[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get progressPercentage() {
    return ((this.currentQuestionIndex) / this.questions.length) * 100;
  }

  submitAnswer() {
    console.log(this.studentInput)
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

  replaySession() {
    this.currentQuestionIndex = 0;
    this.studentInput = '';
    this.conversation = [{ role: 'teacher', message: this.questions[0] }];
    this.previousAnswers = [];
    this.sessionComplete = false;
  }

  playVideo() {
    this.videoPlaying = true;
    setTimeout(() => {
      this.videoPlayer.nativeElement.play();
    }, 0);
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  submitResponse() {
    if (this.studentName && this.selectedQuestion && this.studentResponse) {
      this.responses.push({
        name: this.studentName,
        question: this.selectedQuestion,
        response: this.studentResponse
      });

      this.studentName = '';
      this.selectedQuestion = '';
      this.studentResponse = '';
    }
  }

  openModal(): void {
    console.log('clicked')
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  outsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.id === 'congratsModal') {
      this.closeModal();
    }
  }
}
