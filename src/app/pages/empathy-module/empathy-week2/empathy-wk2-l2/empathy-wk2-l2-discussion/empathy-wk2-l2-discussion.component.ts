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
  feedback: any;
}


@Component({
  selector: 'app-empathy-wk2-l2-discussion',
  templateUrl: './empathy-wk2-l2-discussion.component.html',
  styleUrls: ['./empathy-wk2-l2-discussion.component.css']
})
export class EmpathyWk2L2DiscussionComponent implements OnInit {
  showModal = false;
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'How did Kweku feel at first?',
      others: [
        { text: 'Lonely' }
      ],
      feedback: 'Good thinking.'
    },
    {
      id: 2,
      question: 'What helped Abena know Kweku needed help?',
      others: [
        { text: 'He was alone'}
      ],
      feedback: 'Yes. We can see feelings.'
    },
    {
      id: 3,
      question: 'What kind action did Abena take?',
      others: [
        { text: 'She invited him to play' }
      ],
      feedback: 'That is empathy.'
    },
    {
      id: 4,
      question: 'How did Kweku feel after?',
      others: [
        { text: 'Happy' }
      ],
      feedback: 'Kindness helps.'
    },
    {
      id: 5,
      question: 'What can you do if someone looks lonely?',
      others: [
        { text: 'Talk to them' },
        { text: 'Play with them' }
      ],
      feedback: 'Excellent choice.'
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

  submitImage() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
