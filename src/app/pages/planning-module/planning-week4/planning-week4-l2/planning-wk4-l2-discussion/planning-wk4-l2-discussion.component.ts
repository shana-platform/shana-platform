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
  selector: 'app-planning-wk4-l2-discussion',
  templateUrl: './planning-wk4-l2-discussion.component.html',
  styleUrls: ['./planning-wk4-l2-discussion.component.css']
})
export class PlanningWk4L2DiscussionComponent implements OnInit {
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'What did you learn about planning this month?',
      others: [
        { text: 'I can get more done when I plan' }
      ]
    },
    {
      id: 2,
      question: 'How did planning help Shane?',
      others: [
        { comment: 'He finished his garden and felt proud.' }
      ]
    },
    {
      id: 3,
      question: 'What will you plan next?',
      others: [
        { text: 'See what others said: “I will plan a reading challenge.' }
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
