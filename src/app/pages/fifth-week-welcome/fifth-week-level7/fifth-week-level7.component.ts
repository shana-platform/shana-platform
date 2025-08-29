import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-week-level7',
  templateUrl: './fifth-week-level7.component.html',
  styleUrls: ['./fifth-week-level7.component.css']
})
export class FifthWeekLevel7Component implements OnInit {
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
