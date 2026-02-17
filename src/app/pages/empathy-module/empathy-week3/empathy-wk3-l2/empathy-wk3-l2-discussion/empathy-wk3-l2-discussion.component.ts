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
  selector: 'app-empathy-wk3-l2-discussion',
  templateUrl: './empathy-wk3-l2-discussion.component.html',
  styleUrls: ['./empathy-wk3-l2-discussion.component.css']
})
export class EmpathyWk3L2DiscussionComponent implements OnInit {
  showModal = false;
  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'How did Yaw feel when the tower fell?',
      others: [
        { text: 'Sad ' }
      ],
      feedback: 'That can hurt'
    },
    {
      id: 2,
      question: 'What made Yaw feel better?',
      others: [
        { text: 'Kind words'}
      ],
      feedback: 'Words are powerful'
    },
    {
      id: 3,
      question: 'Was laughing a kind action?',
      others: [
        { text: 'No' }
      ],
      feedback: 'Correct!'
    },
    {
      id: 4,
      question: 'What can you say to help a friend?',
      others: [
        { text: 'It’s okay' }
      ],
      feedback: 'That shows empathy.'
    },
    {
      id: 5,
      question: 'How do kind words help people?',
      others: [
        { text: 'They feel better' }
      ],
      feedback: 'Exactly'
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
