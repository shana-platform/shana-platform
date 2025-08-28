import { Component, OnInit } from '@angular/core';

interface PrideMoment {
  title: string;
  description: string;
  stars: number;
  time: string;
}
@Component({
  selector: 'app-fifth-week-level5',
  templateUrl: './fifth-week-level5.component.html',
  styleUrls: ['./fifth-week-level5.component.css']
})
export class FifthWeekLevel5Component implements OnInit {
  proudStars = 0;
  level = 1;
  progress = 0;
  moments: { text: string }[] = [];
  newMoment = "";

  // moments: { text: string; stars: number; time: string }[] = [];
  constructor() { }

  ngOnInit(): void {
  }


  sharePride() {
    if (!this.newMoment.trim()) return;
  
    // Add new moment
    this.moments.unshift({ text: this.newMoment });
  
    // Update stats
    this.proudStars++;
    this.progress = (this.proudStars % 5) * 5;
    this.level = Math.floor(this.proudStars / 5) + 1;
  
    // Reset input
    this.newMoment = "";
  }
}
