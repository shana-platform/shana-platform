import { Component, OnInit } from '@angular/core';

interface Question {
  text: string;
  correctAnswer: 'YES' | 'NO';
  feedback: string;
}

@Component({
  selector: 'app-respect-week1',
  templateUrl: './respect-week1.component.html',
  styleUrls: ['./respect-week1.component.css']
})
export class RespectWeek1Component implements OnInit {

  quizStarted = false;
  showEndModal = false;


  questions: Question[] = [
    {
      text: 'Eating healthy food helps my body.',
      correctAnswer: 'YES',
      feedback: 'Correct! Taking care of your body shows self-respect.'
    },
    {
      text: 'Calling myself names when I make mistakes.',
      correctAnswer: 'NO',
      feedback: 'Right! Respect means being kind to yourself.'
    },
    {
      text: 'Taking a break when I’m tired.',
      correctAnswer: 'YES',
      feedback: 'Good! Rest is part of self-care.'
    },
    {
      text: 'Trying again after failing the first time.',
      correctAnswer: 'YES',
      feedback: 'That’s confidence and respect together!'
    },
    {
      text: 'Comparing myself badly to others.',
      correctAnswer: 'NO',
      feedback: 'Exactly — self-respect means valuing who you are.'
    }
  ];

  currentIndex = 0;
  score = 0;
  selectedAnswer: 'YES' | 'NO' | null = null;
  showFeedback = false;

  constructor() { }

  ngOnInit(): void {
  }

  startQuiz() {
    this.quizStarted = true;
  }

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  selectAnswer(answer: 'YES' | 'NO') {
    if (this.showFeedback) return;

    this.selectedAnswer = answer;
    this.showFeedback = true;

    if (answer === this.currentQuestion.correctAnswer) {
      this.score++;
    }

    setTimeout(() => {
      this.nextQuestion();
    }, 1800);
  }

  nextQuestion() {
    this.showFeedback = false;
    this.selectedAnswer = null;
  
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    } else {
      // LAST QUESTION DONE
      this.showEndModal = true;
    }
  }
  
  proceedToNextLesson() {
    this.showEndModal = false;
  }
  
}
