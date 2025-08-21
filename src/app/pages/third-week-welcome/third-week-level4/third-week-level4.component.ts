import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-week-level4',
  templateUrl: './third-week-level4.component.html',
  styleUrls: ['./third-week-level4.component.css']
})
export class ThirdWeekLevel4Component implements OnInit {
  dreamerName: string = '';
  showPopup = false;

  // Store activities
  activities = {
    morning: [] as string[],
    afternoon: [] as string[],
    evening: [] as string[],
  };

  // Temp input holders
  newActivity = {
    morning: '',
    afternoon: '',
    evening: '',
  };
  constructor() { }

  ngOnInit(): void {
  }

    // Add activity to the right slot
    addActivity(period: 'morning' | 'afternoon' | 'evening') {
      console.log(period)
      const activity = this.newActivity[period].trim();
      console.log(activity)
      if (activity) {
        this.activities[period].push(activity);
        this.newActivity[period] = '';
      }
    }
}
