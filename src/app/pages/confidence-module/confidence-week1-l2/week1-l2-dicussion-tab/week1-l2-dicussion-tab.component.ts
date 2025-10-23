import { Component, OnInit } from '@angular/core';

interface DiscussionPrompt {
  id: number;
  question: string;
  answers: string[];
  answersBy?: { name: string; text: string }[];
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
      answers: ['Her voice was funny.', 'She was short.', 'Her teeth were big.']
    },
    {
      id: 2,
      question: 'How did Molly Lou stay confident even when people laughed at her?',
      answersBy: [
        { name: 'Kwame', text: "She remembered her grandma's words." },
        { name: 'Ama', text: "She didn't listen to the mean kids." }
      ],
      answers: []
    },
    {
      id: 3,
      question: 'What is something special about YOU that you like?',
      answers: ['I run very fast.', 'I like making my friends laugh.']
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
