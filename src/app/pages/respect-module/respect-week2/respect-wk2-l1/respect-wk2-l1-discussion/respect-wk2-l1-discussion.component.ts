import { Component, OnInit } from '@angular/core';

interface DiscussionPrompt {
  id: number;
  question: string;
  userAnswer?: string;
  submitted?: boolean | any;
  feedback: any;
}

@Component({
  selector: 'app-respect-wk2-l1-discussion',
  templateUrl: './respect-wk2-l1-discussion.component.html',
  styleUrls: ['./respect-wk2-l1-discussion.component.css']
})
export class RespectWk2L1DiscussionComponent implements OnInit {
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'How do you show respect when someone else is speaking?',
      feedback: 'Great! Listening is powerful.'
    },
    {
      id: 2,
      question: 'Why is waiting your turn important?',
      feedback: 'Exactly — fairness shows respect.'
    },
    {
      id: 3,
      question: 'How do you make others feel respected?',
      feedback: 'Wonderful answer!”'
    },
    {
      id: 4,
      question: 'What does respect sound like?',
      feedback: 'Perfect! Words matter.'
    },
    {
      id: 5,
      question: 'How can you show respect at home today?',
      feedback: 'Good plan — small actions make big respect!'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submitAnswer(prompt: any) {
    if (prompt.userAnswer.trim()) {
      prompt.submitted = true;
    }
  }
}
