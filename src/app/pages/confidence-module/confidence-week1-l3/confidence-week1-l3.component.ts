import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confidence-week1-l3',
  templateUrl: './confidence-week1-l3.component.html',
  styleUrls: ['./confidence-week1-l3.component.css']
})
export class ConfidenceWeek1L3Component implements OnInit {
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
