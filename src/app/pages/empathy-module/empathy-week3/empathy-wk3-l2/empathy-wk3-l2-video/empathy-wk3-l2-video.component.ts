import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empathy-wk3-l2-video',
  templateUrl: './empathy-wk3-l2-video.component.html',
  styleUrls: ['./empathy-wk3-l2-video.component.css']
})
export class EmpathyWk3L2VideoComponent implements OnInit {
  slides = [
    {
      image: 'assets/EW3P1.png'
    },
    {
      image: 'assets/EW3P2.png'
    },
    {
      image: 'assets/EW3P3.png'
    },
    {
      image: 'assets/EW3P4.png'
    },
    {
      image: 'assets/EW3P5.png'
    },
    {
      image: 'assets/EW3P6.png'
    },
    {
      image: 'assets/EW3P7.png'
    },
    {
      image: 'assets/EW3P8.png'
    },
    {
      image: 'assets/EW3P9.png'
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
