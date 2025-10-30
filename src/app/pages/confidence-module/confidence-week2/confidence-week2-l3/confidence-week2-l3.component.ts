import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confidence-week2-l3',
  templateUrl: './confidence-week2-l3.component.html',
  styleUrls: ['./confidence-week2-l3.component.css']
})
export class ConfidenceWeek2L3Component implements OnInit {
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
