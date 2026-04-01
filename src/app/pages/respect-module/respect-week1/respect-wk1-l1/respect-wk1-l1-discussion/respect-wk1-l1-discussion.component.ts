import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { StudentService } from 'src/app/core/services/student.service';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  feedback: string;
}

@Component({
  selector: 'app-respect-wk1-l1-discussion',
  templateUrl: './respect-wk1-l1-discussion.component.html',
  styleUrls: ['./respect-wk1-l1-discussion.component.css']
})
export class RespectWk1L1DiscussionComponent implements OnInit {
  @Output() goNext = new EventEmitter<void>();

  userAnswers: string[] = new Array(5).fill('');
  isReviewModalOpen = false;
  showFeedback = false;
  showEndModal = false;
  currentIndex = 0;
  score = 0;
  user: any;
  selectedOption: string = '';
  isAnswerCorrect: boolean = false;

  discussionPrompts: QuizQuestion[] = [
    {
      id: 1,
      question: 'Which of the following is an example of liking yourself?',
      options: [
        'Saying bad things about my hair.',
        'Being proud that I try my best.', // Correct
        'Wishing I was someone else.'
      ],
      correctAnswer: 'Being proud that I try my best.',
      feedback: 'Lovely! Celebrating yourself builds respect.'
    },
    {
      id: 2,
      question: 'How should you feel when someone is kind to you?',
      options: [
        'I feel angry.',
        'I feel special and happy.', // Correct
        'I ignore them.'
      ],
      correctAnswer: 'I feel special and happy.',
      feedback: 'Great reflection — you deserve kindness!'
    },
    {
      id: 3,
      question: 'What is a positive thing to say instead of "I can’t do it"?',
      options: [
        'I give up.',
        'This is too hard for me.',
        'I will try and practice.' // Correct
      ],
      correctAnswer: 'I will try and practice.',
      feedback: 'Nice! Positive words help your brain grow.'
    },
    {
      id: 4,
      question: 'Which healthy habit shows respect for your body?',
      options: [
        'Eating fruits, vegetables, and drinking water.', // Correct
        'Staying up all night playing games.',
        'Never washing my hands.'
      ],
      correctAnswer: 'Eating fruits, vegetables, and drinking water.',
      feedback: 'Wonderful — your body loves good care.'
    },
    {
      id: 5,
      question: 'How can you treat yourself kindly today?',
      options: [
        'I will rest when I’m tired and speak nicely to myself.', // Correct
        'I will force myself to work even if I am sick.',
        'I will yell at myself if I make a mistake.'
      ],
      correctAnswer: 'I will rest when I’m tired and speak nicely to myself.',
      feedback: 'Amazing! Self-respect happens in small steps.'
    }
  ];

  constructor(private studentService: StudentService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedUser();
  }

  get currentPrompt() {
    return this.discussionPrompts[this.currentIndex];
  }

  // Called when the user clicks an option
  selectOption(option: string) {
    if (this.showFeedback) return;

    this.selectedOption = option;
  }

  checkAnswer() {
    if (!this.selectedOption) return;

    this.userAnswers[this.currentIndex] = this.selectedOption;
    this.isAnswerCorrect = this.selectedOption === this.currentPrompt.correctAnswer;
    
    if (this.isAnswerCorrect) {
      this.score += 1; // Award a point for a correct answer
    }

    this.showFeedback = true;
  }

  nextQuestion() {
    this.showFeedback = false;
    this.selectedOption = '';
    this.isAnswerCorrect = false;

    if (this.currentIndex < this.discussionPrompts.length - 1) {
      this.currentIndex++;
    } else {
      this.isReviewModalOpen = true;
    }
  }

  showModal(){
    this.showEndModal = true;
    this.isReviewModalOpen = false;
  }

  proceedToNextLesson() {
    this.showEndModal = false;
    this.studentService.updateUserStats({ stars: this.score, modulesCompleted: 0, badges: 0, trophies: 0 });
    this.goNext.emit();
  }
}