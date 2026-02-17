import { Component, OnInit } from '@angular/core';

interface Scenario {
  id: number;
  title: string;
  image: string;
  answer: string;
  feedback: string;
  revealed: boolean;
}

@Component({
  selector: 'app-empathy-wk4-l1',
  templateUrl: './empathy-wk4-l1.component.html',
  styleUrls: ['./empathy-wk4-l1.component.css']
})
export class EmpathyWk4L1Component implements OnInit {
  scenarios: Scenario[] = [
    {
      id: 1,
      title: 'A friend falls down.',
      image: 'assets/scenario-fall.png',
      answer: 'Help them up',
      feedback: 'Helping shows empathy.',
      revealed: false
    },
    {
      id: 2,
      title: 'Someone forgets a pencil.',
      image: 'assets/scenario-pencil.png',
      answer: 'Share mine',
      feedback: 'Sharing is kind.',
      revealed: false
    },
    {
      id: 3,
      title: 'A friend feels scared.',
      image: 'assets/scenario-scared.png',
      answer: 'Stay with them',
      feedback: 'That brings comfort.',
      revealed: false
    },
    {
      id: 4,
      title: 'Someone makes a mistake.',
      image: 'assets/scenario-mistake.png',
      answer: 'Encourage them',
      feedback: 'Kindness helps people try again.',
      revealed: false
    },
    {
      id: 5,
      title: 'A new child joins your class.',
      image: 'assets/scenario-welcome.png',
      answer: 'Say hello',
      feedback: 'Welcoming others is empathy.',
      revealed: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  reveal(scenario: Scenario) {
    scenario.revealed = true;
  }

  get allCompleted(): boolean {
    return this.scenarios.every(s => s.revealed);
  }
}
