import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-respect-wk1-l1-discussion',
  templateUrl: './respect-wk1-l1-discussion.component.html',
  styleUrls: ['./respect-wk1-l1-discussion.component.css']
})
export class RespectWk1L1DiscussionComponent implements OnInit {
  @Output() goNext = new EventEmitter<void>();

  userAnswers: string[] = new Array(5).fill('');
  isReviewModalOpen = false;
  showEndModal = false;
  showSample = false;
  currentIndex = 0;
  score = 0;
  user: any;

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
      question: 'What can you say instead of ‘I can’t do it?',
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

  constructor(private studentService: StudentService, private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedUser();
    console.log(this.user)
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
    this.score = 5;
  }

    proceedToNextLesson() {
      const res = this.score + this.user.stars;
      console.log(res);
    // const res = `${this.score} + ${this.user.stars}`
    // console.log(res)
    // this.router.navigate(['/dashboard']);
    // this.router.navigate(['/respect-week1-l1']);
    this.showEndModal = false;
    this.studentService.updateUserStats({ stars: this.score, modulesCompleted: 0, badges: 0, trophies: 0 });
    this.goNext.emit();
    // alert(`You earned 1 star! Total stars: ${updatedUser.stars}`);
  }
}

