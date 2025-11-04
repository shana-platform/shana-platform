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
}
@Component({
  selector: 'app-week4-l2-discussion',
  templateUrl: './week4-l2-discussion.component.html',
  styleUrls: ['./week4-l2-discussion.component.css']
})
export class Week4L2DiscussionComponent implements OnInit {
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'What new things have you tried this month?',
      others: [
        // { name: 'Mia, 7', comment: `You're.doing your best and that's enough.` }
      ]
    },
    {
      id: 2,
      question: 'How have you become more confident?',
      others: [
        // { name: 'Kofi, 8', comment: `I helped set the table even when nobody asked me.` }
      ]
    },
    {
      id: 3,
      question: 'How can you help others feel confident?',
      others: [
        // { name: 'Mia, 9', comment: `Yes, because each small win shows me I can do things.` }
      ]
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
