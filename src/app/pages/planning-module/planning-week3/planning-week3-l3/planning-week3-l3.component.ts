import { Component, OnInit } from '@angular/core';

export interface ChallengeDay {
  dayNumber: number; // 1, 2, or 3
  isComplete: boolean;
}

export interface GoalTrackerState {
  currentView: 'setup' | 'tracking' | 'complete';
  goalText: string;
  days: ChallengeDay[];
  currentQuote: {
    text: string;
    subText: string;
  }
}

@Component({
  selector: 'app-planning-week3-l3',
  templateUrl: './planning-week3-l3.component.html',
  styleUrls: ['./planning-week3-l3.component.css']
})
export class PlanningWeek3L3Component implements OnInit {
  showModal: boolean = false;
  state: GoalTrackerState = {
    currentView: 'setup',
    goalText: '',
    days: [
      { dayNumber: 1, isComplete: false },
      { dayNumber: 2, isComplete: false },
      { dayNumber: 3, isComplete: false },
    ],
    currentQuote: {
      text: '"When I make clear goals, I believe I can reach them!"',
      subText: 'Start your journey today'
    }
  };

  challengeTitle: string = 'My 3-Day Mini Goal Challenge';
  challengeSubtitle: string = 'Track one simple SMART goal for 3 days';

  constructor() { }

  ngOnInit(): void { }

  get completedDaysCount(): number {
    return this.state.days.filter(d => d.isComplete).length;
  }

  get progressPercentage(): number {
    return (this.completedDaysCount / this.state.days.length) * 100;
  }

  // --- View Transitions and Actions ---

  startChallenge(goalInput: string): void {
    if (goalInput.trim()) {
      this.state.goalText = goalInput.trim();
      this.state.currentView = 'tracking';
      console.log('Challenge started with goal:', this.state.goalText);
    }
  }

  toggleDayComplete(dayIndex: number): void {
    const day = this.state.days[dayIndex];
    if (!day) return;

    // Toggle completion status
    day.isComplete = !day.isComplete;

    const count = this.completedDaysCount;

    // Update quote based on progress
    if (count === 1) {
      this.state.currentQuote = {
        text: '"One day strong! Keep going."',
        subText: 'Great start!'
      };
    } else if (count === 2) {
      this.state.currentQuote = {
        text: '"Two days strong! You\'re unstoppable."',
        subText: 'Almost at the finish line!'
      };
    } else if (count === 3) {
      // Challenge Complete!
      this.state.currentView = 'complete';
      this.state.currentQuote = {
        text: '"You did it! 3 days of commitment!"',
        subText: 'You proved you can do anything!'
      };
    } else {
      // Back to initial state (e.g., if user unchecks all)
      this.state.currentQuote = {
        text: '"When I make clear goals, I believe I can reach them!"',
        subText: 'Start your journey today'
      };
    }
  }

  openModal(): void {
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
