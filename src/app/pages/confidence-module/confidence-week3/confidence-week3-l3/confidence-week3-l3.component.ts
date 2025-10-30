import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confidence-week3-l3',
  templateUrl: './confidence-week3-l3.component.html',
  styleUrls: ['./confidence-week3-l3.component.css']
})
export class ConfidenceWeek3L3Component implements OnInit {
  showModal: boolean = false;
  days = [
    { name: 'Monday', checked: false },
    { name: 'Tuesday', checked: false },
    { name: 'Wednesday', checked: false },
    { name: 'Thursday', checked: false },
    { name: 'Friday', checked: false },
    { name: 'Saturday', checked: false },
    { name: 'Sunday', checked: false }
  ];

  completedDays = 0;
  constructor() { }

  ngOnInit(): void {
  }
  updateProgress() {
    this.completedDays = this.days.filter(day => day.checked).length;
  }

  // completeModule() {
  //   alert('🎉 Congratulations! You’ve completed this confidence module!');
  // }

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
