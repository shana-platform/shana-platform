import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Option {
  text: string;
  icon: string;
  isCorrect: boolean;
}

@Component({
  selector: 'app-empathy-week3',
  templateUrl: './empathy-week3.component.html',
  styleUrls: ['./empathy-week3.component.css']
})
export class EmpathyWeek3Component implements OnInit {
  options: Option[] = [
    { text: 'Sharing', icon: '🤝', isCorrect: true },
    { text: 'Laughing at mistakes', icon: '😂', isCorrect: false },
    { text: 'Ignoring others', icon: '🙈', isCorrect: false }
  ];

  selectedOption: Option | null = null;
  answeredCorrectly = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectOption(option: Option) {
    this.selectedOption = option;
    this.answeredCorrectly = option.isCorrect;
  }

  tryAgain() {
    this.selectedOption = null;
    this.answeredCorrectly = false;
  }

  nextLesson() {
    this.router.navigate(['/empathy-week3-l1']);
  }
  
}
