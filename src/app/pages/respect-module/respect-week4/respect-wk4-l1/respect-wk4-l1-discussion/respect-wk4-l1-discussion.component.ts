import { Component, OnInit } from '@angular/core';

interface DiscussionPrompt {
  id: number;
  question: string;
  userAnswer?: string;
  submitted?: boolean | any;
  feedback: any;
}


@Component({
  selector: 'app-respect-wk4-l1-discussion',
  templateUrl: './respect-wk4-l1-discussion.component.html',
  styleUrls: ['./respect-wk4-l1-discussion.component.css']
})
export class RespectWk4L1DiscussionComponent implements OnInit {
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'Why is it good that people are different?',
      feedback: 'Exactly — differences make us special.'
    },
    {
      id: 2,
      question: 'How can you include someone new?',
      feedback: 'Beautiful idea!'
    },
    {
      id: 3,
      question: 'Name one way people can be different',
      feedback: 'Nice! Differences are normal.'
    },
    {
      id: 4,
      question: 'How will you show respect to someone this week?',
      feedback: 'Wonderful — kindness builds respect.'
    },
    {
      id: 5,
      question: 'How would you feel if someone left you out?',
      feedback: 'Great reflection — respect includes empathy.'
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
