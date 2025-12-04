import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-week2-level3',
  templateUrl: './planning-week2-level3.component.html',
  styleUrls: ['./planning-week2-level3.component.css']
})
export class PlanningWeek2Level3Component implements OnInit {
  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
