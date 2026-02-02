import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empathy-wk1-l2',
  templateUrl: './empathy-wk1-l2.component.html',
  styleUrls: ['./empathy-wk1-l2.component.css']
})
export class EmpathyWk1L2Component implements OnInit {
  showModal = false;
  times = ['Morning', 'Afternoon', 'Evening'];

  emotions = [
    { label: 'Happy', icon: '😊' },
    { label: 'Sad', icon: '😢' },
    { label: 'Calm', icon: '😌' },
    { label: 'Excited', icon: '🤩' },
    { label: 'Tired', icon: '😴' },
    { label: 'Frustrated', icon: '😤' }
  ];

  selected: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  selectEmotion(time: string, emotion: string) {
    this.selected[time] = emotion;
  }

  isSelected(time: string, emotion: string): boolean {
    return this.selected[time] === emotion;
  }

  completeLesson() {
    this.showModal = true;
  }
}
