import { ProgressService } from 'src/app/core/services/progress.service';
import { StudentService } from 'src/app/core/services/student.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

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

  score = 0;
  currentIndex = 0;
  showFeedback = false;
  selectedAnswer: 'YES' | 'NO' | null = null;
  feedbackMessage: string = '';

  constructor(
    private router: Router, 
    private studentService: StudentService,
    private progressService: ProgressService
  ) { }

  ngOnInit(): void {
    this.progressService.currentProgress$.pipe(take(1)).subscribe(progress => {
      if (progress['week1'] == 30) {
        alert('You have already completed Level 1! Taking you to Level 2.');
        this.router.navigate(['/respect-week1-l1']);
      } else if (progress['week1'] == 70) {
        alert('You have already completed Level 2! Taking you to Level 3.');
        this.router.navigate(['/respect-week1-l2']);
      } else if (progress['week1'] == 100){
        alert('You have already completed week1! Taking you to week 2');
        this.router.navigate(['/respect-week2']);
      }
    });
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
      this.feedbackMessage = this.currentQuestion.feedback;
      this.score++;
  
      setTimeout(() => {
        this.nextQuestion();
      }, 1800);
  
    } else {
      this.feedbackMessage = 'No, try again!';
      setTimeout(() => {
        this.showFeedback = false;
        this.selectedAnswer = null;
        this.feedbackMessage = '';
      }, 1500);
    }
  }

  nextQuestion() {
    this.showFeedback = false;
    this.selectedAnswer = null;
  
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    } else {
      this.showEndModal = true;
    }
  }
  
  proceedToNextLesson() {
    this.progressService.updateProgress('week1', 100);
    this.studentService.updateUserStats({ 
      stars: this.score, 
      modulesCompleted: 1,
      badges: 0, 
      trophies: 0 
    });
    this.router.navigate(['/respect-week1-l1']);
  }
}