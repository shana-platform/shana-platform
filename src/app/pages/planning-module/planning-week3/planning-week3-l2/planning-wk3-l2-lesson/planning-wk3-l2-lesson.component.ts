import { Component, OnInit } from '@angular/core';

export interface SmartElement {
  letter: string; // S, M, A, R, T
  title: string; // Specific, Measurable, etc.
  description: string;
  example: string;
  colorClass: string; // Used for distinct styling (s-color, m-color, etc.)
  icon: string; // Optional: icon for the card
}

@Component({
  selector: 'app-planning-wk3-l2-lesson',
  templateUrl: './planning-wk3-l2-lesson.component.html',
  styleUrls: ['./planning-wk3-l2-lesson.component.css']
})
export class PlanningWk3L2LessonComponent implements OnInit {

  pageHeader: string = 'What Are SMART Goals?';
  pageSubtitle: string = 'Learn how to set goals that are clear, trackable, and achievable. Each letter stands for something important!';
  pageTag: string = 'Learning Made Fun';

  smartElements: SmartElement[] = [
    {
      letter: 'S',
      title: 'Specific',
      description: 'Be clear about what you want to do.',
      example: '"I want to pack my school bag every night."',
      colorClass: 's-color',
      icon: 'fa-bullseye'
    },
    {
      letter: 'M',
      title: 'Measurable',
      description: 'Can you count or see your progress?',
      example: '"I\'ll do it 5 times this week."',
      colorClass: 'm-color',
      icon: 'fa-bar-chart'
    },
    {
      letter: 'A',
      title: 'Achievable',
      description: 'Make sure it\'s something you can do.',
      example: '"I can do it before bedtime."',
      colorClass: 'a-color',
      icon: 'fa-check-circle'
    },
    {
      letter: 'R',
      title: 'Realistic',
      description: 'It should fit your daily life.',
      example: '"I have 10 minutes to do this."',
      colorClass: 'r-color',
      icon: 'fa-calendar'
    },
    {
      letter: 'T',
      title: 'Time-bound',
      description: 'Decide when you will do it.',
      example: '"For one week."',
      colorClass: 't-color',
      icon: 'fa-clock'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
