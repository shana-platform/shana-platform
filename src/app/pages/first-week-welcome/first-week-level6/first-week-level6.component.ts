import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-week-level6',
  templateUrl: './first-week-level6.component.html',
  styleUrls: ['./first-week-level6.component.css']
})
export class FirstWeekLevel6Component implements OnInit {
  showStrengths = false;
  selectedStrengthCard: string | null = null;
  showFoundationSection = false;
  showModal: boolean = false;
    strengths: string[] = [
    'Being kind to others',
    'Asking great questions',
    'Making people smile'
  ];

  affirmation: string = 'When we know we have strength, we show strength!';
  constructor() { }

  ngOnInit(): void {
  }

  selectStrengthCard(card: string) {
    this.selectedStrengthCard = card;
    this.showFoundationSection = true; // triggers the reveal
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
