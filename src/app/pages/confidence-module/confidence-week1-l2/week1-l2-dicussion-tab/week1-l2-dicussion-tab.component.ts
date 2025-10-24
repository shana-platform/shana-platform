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
  selector: 'app-week1-l2-dicussion-tab',
  templateUrl: './week1-l2-dicussion-tab.component.html',
  styleUrls: ['./week1-l2-dicussion-tab.component.css']
})
export class Week1L2DicussionTabComponent implements OnInit {

  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'What makes Molly Lou Melon different?',
      others: [
        { text: 'Her voice was funny.' },
        { text: 'She was short.' },
        { text: 'Her teeth were big.' }
      ]
    },
    {
      id: 2,
      question: 'How did Molly Lou stay confident even when people laughed at her?”',
      others: [
        { name: 'Kwame', comment: 'She remembered her grandma’s words.' },
        { name: 'Ama', comment: 'She didn’t listen to the mean kids.' }
      ]
    },
    {
      id: 3,
      question: 'What is something special about YOU that you like?',
      others: [
        { text: 'I run very fast.' },
        { text: 'I like making my friends laugh.' }
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
