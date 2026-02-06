import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empathy-wk2-l1',
  templateUrl: './empathy-wk2-l1.component.html',
  styleUrls: ['./empathy-wk2-l1.component.css']
})
export class EmpathyWk2L1Component implements OnInit {
  showModal = false;
  questions: any = [
    {
      text: 'A child drops their ice cream.',
      image: 'assets/dropped-icecream.png',
      type: 'mcq',
      options: [
        { label: 'A', text: 'Happy', correct: false },
        { label: 'B', text: 'Sad', correct: true },
        { label: 'C', text: 'Excited', correct: false }
      ],
      feedback: 'Yes! Losing something can feel sad.',
    },
    {
      text: 'A child wins a game.',
      image: 'assets/winning-game.png',
      type: 'mcq',
      options: [
        { label: 'A', text: 'Excited', correct: true },
        { label: 'B', text: 'Angry', correct: false },
        { label: 'C', text: 'Scared', correct: false }
      ],
      feedback: 'Correct! Winning feels exciting.',
    },
    {
      text: 'A child is sitting alone.',
      image: 'assets/sitting-alone.png',
      type: 'input',
      sampleAnswer: 'Lonely',
      feedback: 'Good thinking.',
    },
    {
      text: 'A child gets help from a friend.',
      image: 'assets/friend-helping.png',
      type: 'input',
      sampleAnswer: 'Happy',
      feedback: 'Kindness brings happiness.',
    },
    {
      text: 'A child is shouted at.',
      image: 'assets/being-shouted-.png',
      type: 'input',
      sampleAnswer: 'Scared / Upset',
      feedback: 'Loud voices can hurt feelings.',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(q: any, opt: any) {
    if (q.selected) return;
    q.selected = opt;
    q.showFeedback = true;
    q.feedbackTitle = opt.correct ? 'Correct!' : 'Try again!';
  }

  submitText(q: any) {
    if (!q.userAnswer) return;
    q.showFeedback = true;
    q.feedbackTitle = 'Great thinking!';
  }

  getOptionClass(q: any, opt: any) {
    if (!q.selected) return '';
    if (opt === q.selected && opt.correct) return 'correct';
    if (opt === q.selected && !opt.correct) return 'wrong';
    return '';
  }

  get allAnswered(): boolean {
    return this.questions.every((q: { type: string; selected: any; userAnswer: any; showFeedback: any; }) =>
      q.type === 'mcq'
        ? q.selected
        : q.userAnswer && q.showFeedback
    );
  }
  
  completeLesson() {
    this.showModal = true;
  }
}
