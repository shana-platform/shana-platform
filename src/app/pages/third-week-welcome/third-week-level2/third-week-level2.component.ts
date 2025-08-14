import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-week-level2',
  templateUrl: './third-week-level2.component.html',
  styleUrls: ['./third-week-level2.component.css']
})
export class ThirdWeekLevel2Component implements OnInit {
  slides = [
    {
      image: 'assets/kofi1.jpeg',
      title: 'Saturday Morning!',
      text: 'Kofi wakes up excited for Saturday! He stretches and thinks about all the fun games he wants to play today.'
    },
    {
      image: 'assets/kofi2.jpeg',
      title: 'Helping Out!',
      text: 'Kofi helps his family clean up the house so everyone can have fun later.'
    },
    {
      image: 'assets/kofi3.jpeg',
      title: 'Play Time!',
      text: 'After chores, Kofi plays games with his friends at the park.'
    },
    {
      image: 'assets/kofi4.jpeg',
      title: 'Play Time!',
      text: 'After chores, Kofi plays games with his friends at the park.'
    },
    {
      image: 'assets/kofi5.jpeg',
      title: 'Play Time!',
      text: 'After chores, Kofi plays games with his friends at the park.'
    },
    {
      image: 'assets/kofi6.jpeg',
      title: 'Play Time!',
      text: 'After chores, Kofi plays games with his friends at the park.'
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
