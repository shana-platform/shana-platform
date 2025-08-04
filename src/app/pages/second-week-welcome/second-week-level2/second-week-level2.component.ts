import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-week-level2',
  templateUrl: './second-week-level2.component.html',
  styleUrls: ['./second-week-level2.component.css']
})
export class SecondWeekLevel2Component implements OnInit {
  showChatCard = false;
  completeJourney = false;
  showNextChatCard = false;
  constructor() { }

  ngOnInit(): void {
  }

  startChat() {
    this.showChatCard = true;
    //  confetti();
  }
  startNextChat() {
    this.showNextChatCard = true;
    //  confetti();
  }
  completeCardJourney() {
    this.completeJourney = true;
    this.showNextChatCard = false;
    this.showChatCard = false;
    //  confetti();
  }
}
