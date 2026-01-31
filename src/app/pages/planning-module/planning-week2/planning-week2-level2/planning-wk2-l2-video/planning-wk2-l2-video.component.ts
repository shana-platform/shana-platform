import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-wk2-l2-video',
  templateUrl: './planning-wk2-l2-video.component.html',
  styleUrls: ['./planning-wk2-l2-video.component.css']
})
export class PlanningWk2L2VideoComponent implements OnInit {
  slides = [
    {
      image: 'assets/PW2P1.png'
    },
    {
      image: 'assets/PW2P2.png'
    },
    {
      image: 'assets/PW2P3.png'
    },
    {
      image: 'assets/PW2P4.png'
    },
    {
      image: 'assets/PW2P5.png'
    },
    {
      image: 'assets/PW2P6.png'
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
