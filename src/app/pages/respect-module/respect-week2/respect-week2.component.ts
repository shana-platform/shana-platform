import { Component, OnInit } from '@angular/core';
interface Option {
  label: string;
  correct: boolean;
}

interface Scenario {
  question: string;
  options: Option[];
  feedback: string;
}

@Component({
  selector: 'app-respect-week2',
  templateUrl: './respect-week2.component.html',
  styleUrls: ['./respect-week2.component.css']
})
export class RespectWeek2Component implements OnInit {
  current = 0;
  selected: Option | null = null;
  showFeedback = false;
  completed = false;

  scenarios: Scenario[] = [
    {
      question: 'Someone is talking — do you listen or talk over them?',
      options: [
        { label: 'Listen', correct: true },
        { label: 'Talk over them', correct: false }
      ],
      feedback: 'Respect means giving others a chance to speak.'
    },
    {
      question: 'Your friend is sad. What do you do?',
      options: [
        { label: 'Ask what’s wrong / offer a hug', correct: true },
        { label: 'Ignore them', correct: false }
      ],
      feedback: 'Kindness is respect in action.'
    },
    {
      question: 'Everyone wants the swing. What is respectful?',
      options: [
        { label: 'Take turns', correct: true },
        { label: 'Push to be first', correct: false }
      ],
      feedback: 'Sharing shows respect for others’ needs.'
    },
    {
      question: 'When someone asks you politely, how do you answer?',
      options: [
        { label: 'Say “yes please” or “okay”', correct: true },
        { label: 'Shout or ignore them', correct: false }
      ],
      feedback: 'Good manners = respect.'
    },
    {
      question: 'Someone makes a mistake. What should you do?',
      options: [
        { label: 'Be patient or help', correct: true },
        { label: 'Laugh at them', correct: false }
      ],
      feedback: 'Respect means treating people gently.'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  select(option: Option) {
    if (this.selected) return;

    this.selected = option;
    this.showFeedback = true;

    if (option.correct) {
      setTimeout(() => this.next(), 1200);
    }
  }

  next() {
    this.selected = null;
    this.showFeedback = false;

    if (this.current < this.scenarios.length - 1) {
      this.current++;
    } else {
      this.completed = true;
    }
  }

  get progress() {
    return ((this.current + 1) / this.scenarios.length) * 100;
  }
}
