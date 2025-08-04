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

  responses: { name: string; question: string; response: string }[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
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
