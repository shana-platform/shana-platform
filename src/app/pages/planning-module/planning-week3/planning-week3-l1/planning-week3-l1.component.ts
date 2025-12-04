import { Component, OnInit } from '@angular/core';

export interface QuizOption {
  label: string;
  text: string;
}

export interface QuizQuestion {
  questionNumber: number;
  questionText: string;
  options: QuizOption[];
  correctOptionLabel: string;
  // New: Specific feedback messages for that question
  correctFeedback: string;
  incorrectFeedback: string; 
}

export interface QuizResults {
  message: string; // e.g., "Great Job!"
  score: number; // e.g., 2
  total: number; // e.g., 4
  comment: string; // e.g., "Well done! You understand SMART goals!"
  actionButtonText: string; // e.g., "Play Again"
}

@Component({
  selector: 'app-planning-week3-l1',
  templateUrl: './planning-week3-l1.component.html',
  styleUrls: ['./planning-week3-l1.component.css']
})
export class PlanningWeek3L1Component implements OnInit {

currentScore: number = 0;
totalPointsPerQuestion: number = 10;

quizFinished: boolean = false; // NEW: Controls which screen is visible

  
// State variables for dynamic feedback
selectedOption: string | null = null;
isAnswerSubmitted: boolean = false;
isAnswerCorrect: boolean | null = null; 
feedbackMessage: string | null = null;

allQuestions: QuizQuestion[] = [
    {
      questionNumber: 1,
      questionText: 'Which goal sounds SMARTer?',
      options: [
        { label: 'A', text: 'I will help set the dinner table every evening.' },
        { label: 'B', text: 'I will help at home.' }
      ],
      correctOptionLabel: 'A',
      correctFeedback: 'Correct! Goal A is specific (set the dinner table) and time-bound (every evening).',
      incorrectFeedback: 'Not quite! The answer is A — It’s specific and time-bound!'
    },
    {
      questionNumber: 2,
      questionText: 'Which goal sounds SMARTer?',
      options: [
        { label: 'A', text: 'I will be better at math.' },
        { label: 'B', text: 'I will practise my 3 times table for 10 minutes after school each day.' }
      ],
      correctOptionLabel: 'B',
      correctFeedback: 'Correct! Goal B is measurable (10 minutes) and achievable (practise each day).',
      incorrectFeedback: 'Not quite! The answer is B — It’s measurable and achievable.'
    },
    {
      questionNumber: 3,
      questionText: 'Which goal sounds SMARTer?',
      options: [
        { label: 'A', text: 'I will tidy my room every Saturday morning.' },
        { label: 'B', text: 'I will keep my room clean.' }
      ],
      correctOptionLabel: 'A',
      correctFeedback: 'Correct! Goal A is clear and fits a real schedule (every Saturday morning).',
      incorrectFeedback: 'Not quite! The answer is A — It’s clear and fits a real schedule.'
    },
    {
      questionNumber: 4,
      questionText: 'Which goal sounds SMARTer?',
      options: [
        { label: 'A', text: 'I will read more books.' },
        { label: 'B', text: 'I will read one storybook every weekend.' }
      ],
      correctOptionLabel: 'B',
      correctFeedback: 'Correct! Goal B has a specific number (one storybook) and time frame (every weekend).',
      incorrectFeedback: 'Not quite! The answer is B — It has a specific number and time frame.'
    }
  ];

  currentQuestionIndex: number = 0;

constructor() { }

ngOnInit(): void {}

get actionButtonText(): string {
  if (this.currentQuestionIndex < this.totalQuestions - 1) {
    return 'Next Question →';
  } else {
    return 'See Results';
  }
}

get currentQuestion(): QuizQuestion {
  return this.allQuestions[this.currentQuestionIndex];
}

get totalQuestions(): number {
  return this.allQuestions.length;
}

// NEW: Calculate the number of questions answered correctly
get scoreCorrectCount(): number {
  return this.currentScore / this.totalPointsPerQuestion;
}

get progressPercentage(): number {
  return (this.currentQuestionIndex + 1) / this.totalQuestions * 100;
}

selectOption(label: string): void {
  if (this.isAnswerSubmitted) return;
  
  this.selectedOption = label;
  this.isAnswerSubmitted = true;
  this.checkAnswer(label);
}


checkAnswer(selectedLabel: string): void {
  if (selectedLabel === this.currentQuestion.correctOptionLabel) {
    this.isAnswerCorrect = true;
    this.currentScore += this.totalPointsPerQuestion;
    this.feedbackMessage = this.currentQuestion.correctFeedback;
    
  } else {
    this.isAnswerCorrect = false;
    this.feedbackMessage = this.currentQuestion.incorrectFeedback;
  }
}

// Function to move to the next question
nextQuestion(): void {
  if (this.currentQuestionIndex < this.totalQuestions - 1) {
    this.currentQuestionIndex++;
    // Reset state for the new question
    this.selectedOption = null;
    this.isAnswerSubmitted = false;
    this.isAnswerCorrect = null;
    this.feedbackMessage = null;
  } else {
    // LAST QUESTION: Finish the quiz and show results
    this.quizFinished = true;
  }
}

getOptionClass(label: string): string {
  let classes = 'option-card';
  
  if (this.isAnswerSubmitted) {
    if (label === this.currentQuestion.correctOptionLabel) {
      classes += ' option-correct'; 
    } else if (label === this.selectedOption) {
      classes += ' option-incorrect';
    } else {
      classes += ' option-unselected';
    }
  }
  return classes;
}
}
