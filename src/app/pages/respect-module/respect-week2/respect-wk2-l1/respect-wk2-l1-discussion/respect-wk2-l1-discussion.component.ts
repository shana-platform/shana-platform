import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StudentService } from 'src/app/core/services/student.service';

interface DiscussionPrompt {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  feedback: string;
}

@Component({
  selector: 'app-respect-wk2-l1-discussion',
  templateUrl: './respect-wk2-l1-discussion.component.html',
  styleUrls: ['./respect-wk2-l1-discussion.component.css']
})
export class RespectWk2L1DiscussionComponent implements OnInit {
  @Output() goNext = new EventEmitter<void>();
  currentIndex = 0;
  selectedOption: string = '';
  showFeedback: boolean = false;
  isAnswerCorrect: boolean = false;
  isFinished: boolean = false;
  score = 0;

  discussionPrompts: DiscussionPrompt[] = [
    {
      id: 1,
      question: 'How do you show respect when someone else is speaking?',
      options: [
        'Interrupt them to share my story.',
        'Look at them and listen quietly.', // Correct
        'Walk away while they are talking.'
      ],
      correctAnswer: 'Look at them and listen quietly.',
      feedback: 'Great! Listening is powerful and shows you care.'
    },
    {
      id: 2,
      question: 'Why is waiting your turn important?',
      options: [
        'Because it is fair and shows respect.', // Correct
        'Because I want to be last.',
        'It is not important, I should go first.'
      ],
      correctAnswer: 'Because it is fair and shows respect.',
      feedback: 'Exactly — fairness shows respect.'
    },
    {
      id: 3,
      question: 'How do you make others feel respected?',
      options: [
        'By ignoring them.',
        'By saying please and thank you.', // Correct
        'By taking their things.'
      ],
      correctAnswer: 'By saying please and thank you.',
      feedback: 'Wonderful answer! Polite words make people feel valued.'
    },
    {
      id: 4,
      question: 'What does respect sound like?',
      options: [
        'Loud yelling.',
        'Saying "Excuse me" and "Thank you".', // Correct
        'Complaining when asked to do something.'
      ],
      correctAnswer: 'Saying "Excuse me" and "Thank you".',
      feedback: 'Perfect! Words matter.'
    },
    {
      id: 5,
      question: 'How can you show respect at home today?',
      options: [
        'Leaving a mess for someone else to clean.',
        'Helping clean up without being asked.', // Correct
        'Arguing with my family.'
      ],
      correctAnswer: 'Helping clean up without being asked.',
      feedback: 'Good plan — small actions make big respect!'
    }
  ];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {}

  get currentPrompt() {
    return this.discussionPrompts[this.currentIndex];
  }

  selectOption(option: string) {
    if (this.showFeedback) return; // Prevent changing answer after checking
    this.selectedOption = option;
  }

  checkAnswer() {
    if (!this.selectedOption) return;

    this.isAnswerCorrect = this.selectedOption === this.currentPrompt.correctAnswer;
    if (this.isAnswerCorrect) {
      this.score++;
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
      this.isFinished = true;
    }
  }

  finishLesson() {
     this.studentService.updateUserStats({ stars: this.score, modulesCompleted: 0, badges: 0, trophies: 0 });
    this.goNext.emit();
  }
}