import { Component, OnInit } from '@angular/core';
// import confetti from 'canvas-confetti';

@Component({
  selector: 'app-second-week-welcome',
  templateUrl: './second-week-welcome.component.html',
  styleUrls: ['./second-week-welcome.component.css']
})
export class SecondWeekWelcomeComponent implements OnInit {
  discoveryStarted = false;
  selectedStrengths: any[] = [];
  showCelebration = false;
  currentQuestionIndex: number = 0;

  strengths = [
    { label: 'Creative Thinker', emoji: '🎨' },
    { label: 'Kind Helper', emoji: '💖' },
    { label: 'Brave Explorer', emoji: '🚀' },
    { label: 'Problem Solver', emoji: '🧩' },
    { label: 'Great Friend', emoji: '⭐' },
    // { label: 'Curious Learner', emoji: '📚' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  startDiscovery() {
    this.discoveryStarted = true;
  }

  toggleStrength(strength: any) {
    const index = this.selectedStrengths.indexOf(strength);
    if (index > -1) {
      this.selectedStrengths.splice(index, 1);
    } else {
      this.selectedStrengths.push(strength);
    }
  }

  celebrate() {
    this.showCelebration = true;
    //  confetti();
  }

  closeCelebration() {
    this.showCelebration = false;
  }


  // endSession() {
  //   this.showCelebration = true;
  // }
  
  replaySession() {
    this.showCelebration = false;
    this.currentQuestionIndex = 0;
    // this.chat = [];
    // Reset any other relevant states
  }
}

