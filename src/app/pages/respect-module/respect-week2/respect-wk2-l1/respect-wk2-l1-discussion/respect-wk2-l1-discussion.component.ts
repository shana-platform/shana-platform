import { Component, OnInit } from '@angular/core';
interface DiscussionAnswer {
  name?: string;
  comment?: string;
  text?: string;
}

interface DiscussionPrompt {
  id: number;
  question: string;
  userAnswer?: string;
  submitted?: boolean | any;
  others: DiscussionAnswer[];
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
      others: [
        { text: 'I like that I am kind.' },
        { text: 'I like my smile.' },
        { text: 'I like that I try my best.' }
      ],
      feedback: 'Great! Listening is powerful.'
    },
    {
      id: 2,
      question: 'Why is waiting your turn important?',
      others: [
        { text: 'I feel happy.'},
        { text: 'I feel special.' },
        { text: 'It makes me smile.'}
      ],
      feedback: 'Exactly — fairness shows respect.'
    },
    {
      id: 3,
      question: 'How do you make others feel respected?',
      others: [
        { text: 'I will try.' },
        { text: 'I can learn this.' },
        { text: 'Let me practice' }
      ],
      feedback: 'Wonderful answer!”'
    },
    {
      id: 4,
      question: 'What does respect sound like?',
      others: [
        { text: 'Excuse me,” “Thank you' },
        { text: 'Sleeping early.' },
        { text: 'Drinking water.' }
      ],
      feedback: 'Perfect! Words matter.'
    },
    {
      id: 5,
      question: 'How can you show respect at home today?',
      others: [
        { text: 'I will rest when I’m tired.' },
        { text: 'I will speak nicely to myself.' },
        { text: 'I will take a break and breathe.' }
      ],
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
