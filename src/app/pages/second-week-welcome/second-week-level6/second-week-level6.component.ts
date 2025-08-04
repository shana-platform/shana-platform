import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-week-level6',
  templateUrl: './second-week-level6.component.html',
  styleUrls: ['./second-week-level6.component.css']
})
export class SecondWeekLevel6Component implements OnInit {
  challengeComplete = false;
  person1Name: string = '';
  person2Name: string = '';

  // Optional: you might also have responses
  person1Response: string = '';
  person2Response: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  saveResponses() {
    this.challengeComplete = true;
    console.log(this.person1Name, this.person2Name);
  }
  
  reset() {
    this.challengeComplete = false;
    // Optionally clear form data
  }
}
