import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-week4',
  templateUrl: './planning-week4.component.html',
  styleUrls: ['./planning-week4.component.css']
})
export class PlanningWeek4Component implements OnInit {
  tag: string = 'Week 4 – Mastery';
  titlePart1: string = 'Plan, Do,';
  titlePart2: string = 'Celebrate!';
  welcomeMessage: string = "Welcome back! It's time to bring all your planning skills together and celebrate how far you've come.";
  
  objectiveHeader: string = "This Week's Objective";
  objectiveText: string = "Put all your planning skills together and take time to reflect on your journey. You've learned so much – now let's see it all come together!";

  constructor() { }

  ngOnInit(): void { }

  onContinueClick(): void {
    console.log('Continuing to next steps/home screen...');
    // Add navigation logic here
  }
}
