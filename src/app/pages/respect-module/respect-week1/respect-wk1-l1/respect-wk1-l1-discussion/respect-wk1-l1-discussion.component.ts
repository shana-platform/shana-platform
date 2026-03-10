import { Component, OnInit } from '@angular/core';
// interface DiscussionAnswer {
//   name?: string;
//   comment?: string;
//   text?: string;
// }

// interface DiscussionPrompt {
//   id: number;
//   question: string;
//   userAnswer?: string;
//   submitted?: boolean | any;
//   sampleAnswers: DiscussionAnswer[];
//   feedback: any;
// }

@Component({
  selector: 'app-respect-wk1-l1-discussion',
  templateUrl: './respect-wk1-l1-discussion.component.html',
  styleUrls: ['./respect-wk1-l1-discussion.component.css']
})
export class RespectWk1L1DiscussionComponent implements OnInit {
  currentIndex = 0;
  userAnswers: string[] = new Array(5).fill('');
  showSample = false;
  isReviewModalOpen = false;
  showEndModal = false;

  discussionPrompts = [
    {
      id: 1,
      question: 'Name one thing you like about yourself.',
      sampleAnswers: ['I like that I am kind.', 'I like my smile.', 'I like that I try my best.'],
      feedback: 'Lovely! Celebrating yourself builds respect.'
    },
    {
      id: 2,
      question: 'How do you feel when someone is kind to you?',
      sampleAnswers: ['I feel happy', 'I feel special.', 'It makes me smile.'],
      feedback: 'Great reflection — you deserve kindness!'
    },
    {
      id: 3,
      question: 'What can you say instead of ‘I can’t do it’?',
      sampleAnswers: ['I will try.', 'I can learn this.', 'Let me practice'],
      feedback: 'Nice! Positive words help your brain grow.'
    },
    {
      id: 4,
      question: 'What healthy habits show respect for your body?',
      sampleAnswers: ['Eating fruits and vegetables.', 'Drinking water', 'Sleeping early.'],
      feedback: 'Wonderful — your body loves good care.'
    },
    {
      id: 5,
      question: 'How can you treat yourself kindly today?',
      sampleAnswers: ['I will rest when I’m tired.', 'I will speak nicely to myself.', 'I will take a break and breathe.'],
      feedback: 'Amazing! Self-respect happens in small steps.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

get currentPrompt() {
    return this.discussionPrompts[this.currentIndex];
  }

  checkAnswer() {
    this.showSample = true;
  }

  nextQuestion() {
    if (this.currentIndex < this.discussionPrompts.length - 1) {
      this.currentIndex++;
      this.showSample = false;
    } else {
      this.isReviewModalOpen = true;
    }
  }

  showModal(){
    this.showEndModal = true;
    this.isReviewModalOpen = false
  }
}

