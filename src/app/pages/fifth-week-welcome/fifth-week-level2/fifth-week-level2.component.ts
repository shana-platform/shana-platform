import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-week-level2',
  templateUrl: './fifth-week-level2.component.html',
  styleUrls: ['./fifth-week-level2.component.css']
})
export class FifthWeekLevel2Component implements OnInit {
  slides = [
    {
      image: 'assets/yaa1.jpg',
      title: 'Yaa Notices!',
      text: 'Yaa saw her little brother struggling with his homework. He looked confused and frustrated with all the papers scattered around.'
    },
    {
      image: 'assets/yaa2.jpg',
      title: 'A Helpful Idea',
      text: 'Yaa decided she wanted to help! She had a bright idea - maybe she could explain the homework in a way her brother would understand.'
    },
    {
      image: 'assets/yaa3.jpg',
      title: 'Teaching Together',
      text: 'Yaa sat down next to her brother and patiently explained each problem. She pointed to the books and helped him understand step by step.'
    },
    {
      image: 'assets/yaa4.jpg',
      title: 'Understanding Dawns',
      text: `Suddenly, her brother's face lit up He understood the homework problems and felt excited to solve them himself.`
    },
    {
      image: 'assets/yaa5.jpg',
      title: 'Mission Accomplished',
      text: `Together, they finished all the homework! Her brother was so happy to complete his work successfully with Yaa's help.`
    }
  ];

  currentIndex = 0;
  autoplay = false;
  autoplayInterval: any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  toggleAutoplay() {
    this.autoplay = !this.autoplay;
    if (this.autoplay) {
      this.startAutoplay();
    } else {
      this.stopAutoplay();
    }
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }
}
