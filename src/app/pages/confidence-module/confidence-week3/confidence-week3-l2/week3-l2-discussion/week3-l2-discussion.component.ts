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
  selector: 'app-week3-l2-discussion',
  templateUrl: './week3-l2-discussion.component.html',
  styleUrls: ['./week3-l2-discussion.component.css']
})
export class Week3L2DiscussionComponent implements OnInit {
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'What makes you feel good when speaking?',
      others: [
        // { name: 'Mia, 7', comment: `You're.doing your best and that's enough.` }
      ]
    },
    {
      id: 2,
      question: 'What can we say to help a friend feel confident?',
      others: [
        // { name: 'Kofi, 8', comment: `I helped set the table even when nobody asked me.` }
      ]
    },
    {
      id: 3,
      question: 'Can we be confident and kind at the same time?',
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
