import { Component, OnInit } from '@angular/core';
export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  image: string;
  feedback: string;
}

@Component({
  selector: 'app-respect-week4',
  templateUrl: './respect-week4.component.html',
  styleUrls: ['./respect-week4.component.css']
})

export class RespectWeek4Component implements OnInit {
  questions: Question[] = [
    { id: 1, text: 'What is different about these two friends?', options: ['Hair color', 'Eye color', 'Height', 'Smile'], correctAnswer: 'Hair color', image: 'assets/pair1.png', feedback: 'One has brown hair and one has blonde hair! Both are equally wonderful.' },
    { id: 2, text: 'Can you spot what makes these children unique?', options: ['Skin color', 'Number of eyes', 'Arms', 'Ears'], correctAnswer: 'Skin color', image: 'assets/pair2.png', feedback: 'They have different skin colors and clothes! Each one is beautiful in their own way.' },
    { id: 3, text: 'These look alike! what\'s different?', options: ['hair color', 'hobbies', 'eye color', 'age'], correctAnswer: 'hobbies', image: 'assets/pair3.png', feedback: 'One loves sports and one loves art! Different interests make life fun.' },
    { id: 4, text: 'What makes these two children special?', options: ['clothes color', 'hair style', 'both A and B', 'Nothing'], correctAnswer: 'both A and B', image: 'assets/pair4.png', feedback: 'They have different hair and clothes! Variety makes our world colorful.' },
    { id: 5, text: 'Find what\'s different about these friends!', options: ['Glasses & hobby', 'Shoes', 'Hair length', 'Smile'], correctAnswer: 'Glasses & hobby', image: 'assets/pair5.png', feedback: 'One wears glasses and reads, the other builds! Different styles are awesome.' }
  ];

  currentIndex = 0;
  score = 0;
  selectedAnswer: string | null = null;
  isCorrect: boolean | null = null;
  showFeedback = false;
  isFinished = false;

  constructor() { }

  ngOnInit(): void {
  }

  get currentQuestion() { return this.questions[this.currentIndex]; }
  get progress() { return ((this.currentIndex + 1) / this.questions.length) * 100; }

  checkAnswer(answer: string) {
    if (this.showFeedback) return;
    this.selectedAnswer = answer;
    this.isCorrect = (answer === this.currentQuestion.correctAnswer);
    if (this.isCorrect) this.score++;
    this.showFeedback = true;
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.resetState();
    } else {
      this.isFinished = true;
    }
  }

  resetState() {
    this.selectedAnswer = null;
    this.isCorrect = null;
    this.showFeedback = false;
  }

  restart() {
    this.currentIndex = 0;
    this.score = 0;
    this.isFinished = false;
    this.resetState();
  }
}
