import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confidence-week4-l1',
  templateUrl: './confidence-week4-l1.component.html',
  styleUrls: ['./confidence-week4-l1.component.css']
})
export class ConfidenceWeek4L1Component implements OnInit {
  victoryText: string = '';
  showModal: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  shareVictory() {
    if (this.victoryText.trim().length === 0) {
      alert('Please share something you’re proud of!');
      return;
    }
    console.log('Victory shared:', this.victoryText);
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
