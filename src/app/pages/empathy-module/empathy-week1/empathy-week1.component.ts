import { Component, OnInit } from '@angular/core';
interface Feeling {
  name: string;
  emoji: string;
  color: string;
}

@Component({
  selector: 'app-empathy-week1',
  templateUrl: './empathy-week1.component.html',
  styleUrls: ['./empathy-week1.component.css']
})
export class EmpathyWeek1Component implements OnInit {
  feelings: Feeling[] = [
    { name: 'Happy', emoji: '😊', color: '#63ace5' },
    { name: 'Sad', emoji: '😢', color: '#adcbe3' },
    { name: 'Angry', emoji: '😡', color: '#4b86e0' },
    { name: 'Calm', emoji: '😌', color: '#c8dcfb' }
  ];

  selectedFeeling: string | null = null;
  showFeedback = false;

  selectFeeling(name: string) {
    this.selectedFeeling = name;
    this.showFeedback = true;
  }

  startJourney() {
    console.log('Journey started!');
    // Navigation logic here
  }

  constructor() { }

  ngOnInit(): void {
  }

}
