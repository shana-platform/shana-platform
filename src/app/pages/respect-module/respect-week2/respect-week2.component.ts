import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ProgressService } from 'src/app/core/services/progress.service';
import { StudentService } from 'src/app/core/services/student.service';

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
  score = 0;
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
  
  constructor(  private router: Router, 
      private studentService: StudentService,
      private progressService: ProgressService) { }

  ngOnInit() {
        this.progressService.currentProgress$.pipe(take(1)).subscribe(progress => {
          console.log(progress)
          if (progress['week2'] == 30) {
            alert('You have already completed Level 1! Taking you to Level 2.');
            this.router.navigate(['/respect-week2-l1']);
          } else if (progress['week2'] == 70) {
            alert('You have already completed Level 2! Taking you to Level 3.');
            this.router.navigate(['/respect-week2-l2']);
          } else if (progress['week2'] == 100){
            alert('You have already completed week2! Taking you to week 3');
            this.router.navigate(['/respect-week3']);
          }
        });
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
      this.score++;
    } else {
      this.completed = true;
    }
  }

  get progress() {
    return ((this.current + 1) / this.scenarios.length) * 100;
  }

    proceedToNextLesson() {
    this.progressService.updateProgress('week2', 30);
    this.studentService.updateUserStats({ 
      stars: this.score, 
      modulesCompleted: 0,
      badges: 0, 
      trophies: 0 
    });
    this.router.navigate(['/respect-week2-l1']);
  }
}
