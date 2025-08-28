import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-week-level2',
  templateUrl: './fifth-week-level2.component.html',
  styleUrls: ['./fifth-week-level2.component.css']
})
export class FifthWeekLevel2Component implements OnInit {
  currentIndex = 0;

  slides = [
    {
      image: 'assets/kwame-struggling1.jpg',
      title: "Kwame's Reading Challenge",
      text: "Kwame loved stories, but reading was really hard for him. The words seemed to dance around on the page, and he felt frustrated when he couldn't keep up with his classmates."
    },
    {
      image: 'assets/asking-sister.jpg',
      title: "Asking for Help",
      text: "One day, Kwame decided to ask his big sister Akosua for help. Can you teach me to read faster? he asked hopefully. She smiled warmly and said, Of course! I'd love to help you."
    },
    {
      image: 'assets/reading-together.jpg',
      title: "Learning Together",
      text: "Akosua showed Kwame special tricks for reading. She taught him to follow along with his finger and to sound out difficult words. Reading together made it so much more fun!"
    },
    {
      image: 'assets/reading-routine.jpg',
      title: "Practice Every Night",
      text: "Every evening after dinner, Kwame and Akosua would sit together and read. Some nights they read adventure stories, other nights they read about animals or faraway places."
    },
    {
      image: 'assets/kwame-success.jpg',
      title: "Success!",
      text: "After weeks of practice, Kwame discovered he could read much faster! He felt proud and confident. Now he could enjoy all the wonderful stories he had always wanted to read by himself."
    }
  ];
  constructor() { }

  ngOnInit(): void { }

  get isLastSlide() {
    return this.currentIndex === this.slides.length; // end card index
  }
  
  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
