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
  selector: 'app-planning-wk1-l2-discussion',
  templateUrl: './planning-wk1-l2-discussion.component.html',
  styleUrls: ['./planning-wk1-l2-discussion.component.css']
})
export class PlanningWk1L2DiscussionComponent implements OnInit {
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'Why was Ama late for school?',
      others: [
        { text: 'Because she didn’t plan ahead.' }
      ]
    },
    {
      id: 2,
      question: 'How can planning help you feel ready?',
      others: [
        { comment: 'I won’t forget things, and I’ll be on time!' }
      ]
    },
    {
      id: 3,
      question: 'What did Ama and her mum do differently the next day?',
      others: [
        { text: 'They packed everything before bedtime' }
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
