import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-planning-wk3-l2-video',
  templateUrl: './planning-wk3-l2-video.component.html',
  styleUrls: ['./planning-wk3-l2-video.component.css']
})
export class PlanningWk3L2VideoComponent implements OnInit {
  slides = [
    {
      image: 'assets/PW3P1.png'
    },
    {
      image: 'assets/PW3P2.png'
    },
    {
      image: 'assets/PW3P3.png'
    },
    {
      image: 'assets/PW3P4.png'
    },
    {
      image: 'assets/PW3P5.png'
    },
    {
      image: 'assets/PW3P6.png'
    },
    {
      image: 'assets/PW3P7.png'
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
