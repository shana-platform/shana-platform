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
  selector: 'app-respect-wk1-l1-discussion',
  templateUrl: './respect-wk1-l1-discussion.component.html',
  styleUrls: ['./respect-wk1-l1-discussion.component.css']
})
export class RespectWk1L1DiscussionComponent implements OnInit {
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'Name one thing you like about yourself.',
      others: [
        { text: 'I like that I am kind.' },
        { text: 'I like my smile.' },
        { text: 'I like that I try my best.' }
      ],
      feedback: 'Lovely! Celebrating yourself builds respect.'
    },
    {
      id: 2,
      question: 'How do you feel when someone is kind to you?',
      others: [
        { text: 'I feel happy.'},
        { text: 'I feel special.' },
        { text: 'It makes me smile.'}
      ],
      feedback: 'Great reflection — you deserve kindness!'
    },
    {
      id: 3,
      question: 'What can you say instead of ‘I can’t do it’?',
      others: [
        { text: 'I will try.' },
        { text: 'I can learn this.' },
        { text: 'Let me practice' }
      ],
      feedback: 'Nice! Positive words help your brain grow.'
    },
    {
      id: 4,
      question: 'What healthy habits show respect for your body?',
      others: [
        { text: 'Eating fruits and vegetables.' },
        { text: 'Sleeping early.' },
        { text: 'Drinking water.' }
      ],
      feedback: 'Wonderful — your body loves good care.'
    },
    {
      id: 5,
      question: 'How can you treat yourself kindly today?',
      others: [
        { text: 'I will rest when I’m tired.' },
        { text: 'I will speak nicely to myself.' },
        { text: 'I will take a break and breathe.' }
      ],
      feedback: 'Amazing! Self-respect happens in small steps.'
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
