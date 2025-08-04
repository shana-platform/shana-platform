import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-week-level4',
  templateUrl: './second-week-level4.component.html',
  styleUrls: ['./second-week-level4.component.css']
})
export class SecondWeekLevel4Component implements OnInit {
  strengths: string[] = [];
  newStrength: string = '';
  showNotification = false;
  constructor() { }

  ngOnInit(): void {
  }

  addStrength() {
    if (this.newStrength.trim() && this.strengths.length < 3) {
      this.strengths.push(this.newStrength.trim());
      this.newStrength = '';
      this.showNotification = true;

      setTimeout(() => {
        this.showNotification = false;
      }, 2000);
    }
  }

  addInspired(strength: string) {
    if (this.strengths.length < 3 && !this.strengths.includes(strength)) {
      this.strengths.push(strength);
      this.showNotification = true;

      setTimeout(() => {
        this.showNotification = false;
      }, 2000);
    }
  }

  reset() {
    this.strengths = [];
    this.newStrength = '';
    this.showNotification = false;
  }

}
