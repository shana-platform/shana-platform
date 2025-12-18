import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-week4-l3',
  templateUrl: './planning-week4-l3.component.html',
  styleUrls: ['./planning-week4-l3.component.css']
})
export class PlanningWeek4L3Component implements OnInit {
  reminderEnabled = false;
  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleReminder() {
    this.reminderEnabled = !this.reminderEnabled;
    console.log('Daily reminder:', this.reminderEnabled);
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
