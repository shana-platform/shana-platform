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
  selector: 'app-week2-l2-discussion',
  templateUrl: './week2-l2-discussion.component.html',
  styleUrls: ['./week2-l2-discussion.component.css']
})
export class Week2L2DiscussionComponent implements OnInit {

  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'What’s one kind thing you can say to yourself to feel better?',
      others: [
        { name: 'Mia, 7', comment: `You're.doing your best and that's enough.` }
      ]
    },
    {
      id: 2,
      question: 'What’s a small thing you did today that made you feel proud?”',
      others: [
        { name: 'Kofi, 8', comment: `I helped set the table even when nobody asked me.` }
      ]
    },
    {
      id: 3,
      question: 'Can trying something small every day make you more confident? Why?',
      others: [
        { name: 'Mia, 9', comment: `Yes, because each small win shows me I can do things.` }
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
