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
  selector: 'app-planning-wk2-l2-discussion',
  templateUrl: './planning-wk2-l2-discussion.component.html',
  styleUrls: ['./planning-wk2-l2-discussion.component.css']
})
export class PlanningWk2L2DiscussionComponent implements OnInit {
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'Why did Liane write a list?',
      others: [
        { text: 'To remember and do everything on time.' }
      ]
    },
    {
      id: 2,
      question: 'How can a list help you?',
      others: [
        { comment: 'I can see what to do first' }
      ]
    },
    {
      id: 3,
      question: 'What’s one thing you’ll plan for Saturday?',
      others: [
        { text: 'Play soccer then help mum cook.' }
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
