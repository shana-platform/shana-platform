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
  selector: 'app-empathy-wk1-l1-discussion',
  templateUrl: './empathy-wk1-l1-discussion.component.html',
  styleUrls: ['./empathy-wk1-l1-discussion.component.css']
})
export class EmpathyWk1L1DiscussionComponent implements OnInit {
  showModal = false;
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'How did Kojo feel when he couldn’t find his socks?',
      others: [
        { text: 'Upset ' },
        { text: 'Angry' }
      ],
      feedback: 'Yes. Little problems can cause big feelings.'
    },
    {
      id: 2,
      question: 'What helped Kojo feel better?',
      others: [
        { text: 'Ama shared her crayons'}
      ],
      feedback: 'Kindness can change how we feel.'
    },
    {
      id: 3,
      question: 'Do feelings stay the same all day?',
      others: [
        { text: 'No' }
      ],
      feedback: 'Correct! Feelings can change.'
    },
    {
      id: 4,
      question: 'How did Kojo feel at the end of the story?',
      others: [
        { text: 'Happy' }
      ],
      feedback: 'Well done!'
    },
    {
      id: 5,
      question: 'Name one feeling you had today.',
      others: [
        { text: 'Happy' },
        { text: 'Sad' },
        { text: 'Excited' }
      ],
      feedback: 'Good noticing. Your feelings matter.'
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
