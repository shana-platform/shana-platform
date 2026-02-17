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
  selector: 'app-empathy-wk4-l2-discussion',
  templateUrl: './empathy-wk4-l2-discussion.component.html',
  styleUrls: ['./empathy-wk4-l2-discussion.component.css']
})
export class EmpathyWk4L2DiscussionComponent implements OnInit {
  showModal = false;
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'What problem did Nii have?',
      others: [
        { text: 'No umbrella' }
      ],
      feedback: 'Good understanding'
    },
    {
      id: 2,
      question: 'What kind choice did Zainab make?',
      others: [
        { text: 'She shared'}
      ],
      feedback: 'That shows empathy'
    },
    {
      id: 3,
      question: 'How did Zainab feel after helping?',
      others: [
        { text: 'Happy' },
        { text: 'Proud' }
      ],
      feedback: 'Helping feels good.'
    },
    {
      id: 4,
      question: 'Was sharing easy or kind?',
      others: [
        { text: 'Kind' }
      ],
      feedback: 'Yes. Kind choices matter.'
    },
    {
      id: 5,
      question: 'Name one way you can help someone today.',
      others: [
        { text: 'Help' },
        { text: 'Share' },
        { text: 'Listen' }
      ],
      feedback: 'That’s empathy in action.'
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
