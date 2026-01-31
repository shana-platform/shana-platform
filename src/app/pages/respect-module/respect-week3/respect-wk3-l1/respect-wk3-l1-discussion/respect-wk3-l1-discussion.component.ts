import { Component, OnInit } from '@angular/core';


interface DiscussionPrompt {
  id: number;
  question: string;
  userAnswer?: string;
  submitted?: boolean | any;
  feedback: any;
}

@Component({
  selector: 'app-respect-wk3-l1-discussion',
  templateUrl: './respect-wk3-l1-discussion.component.html',
  styleUrls: ['./respect-wk3-l1-discussion.component.css']
})
export class RespectWk3L1DiscussionComponent implements OnInit {
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'Why should we care for our belongings?',
      feedback: 'Good! Caring shows responsibility.'
    },
    {
      id: 2,
      question: 'What should you do when you borrow something?',
      feedback: 'Exactly — return it safely!'
    },
    {
      id: 3,
      question: 'How do you feel when someone damages your things?',
      feedback: 'Great reflection — this helps build empathy.'
    },
    {
      id: 4,
      question: 'What is one item you can take better care of?',
      feedback: 'Nice! Respect begins with small steps.'
    },
    {
      id: 5,
      question: 'What should you do if you accidentally damage something?',
      feedback: 'Yes — honesty and care show respect.'
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
