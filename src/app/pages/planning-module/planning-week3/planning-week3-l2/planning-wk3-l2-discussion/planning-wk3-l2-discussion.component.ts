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
  selector: 'app-planning-wk3-l2-discussion',
  templateUrl: './planning-wk3-l2-discussion.component.html',
  styleUrls: ['./planning-wk3-l2-discussion.component.css']
})
export class PlanningWk3L2DiscussionComponent implements OnInit {
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'Why is it important to make your goal clear?',
      others: [
        { text: 'So you can know what to do each day!' }
      ]
    },
    {
      id: 2,
      question: 'How do small goals help you?',
      others: [
        { comment: 'They make big things easier.' }
      ]
    },
    {
      id: 3,
      question: 'What will you feel when you finish your goal?',
      others: [
        { text: 'Proud!' }
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
