import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week4-l2-video',
  templateUrl: './week4-l2-video.component.html',
  styleUrls: ['./week4-l2-video.component.css']
})
export class Week4L2VideoComponent implements OnInit {
  slides = [
    {
      image: 'assets/shane-intro.png'
    },
    {
      image: 'assets/shane.png'
    },
    {
      image: 'assets/shane1.png'
    },
    {
      image: 'assets/shane2.png'
    },
    {
      image: 'assets/shane3.png'
    },
    {
      image: 'assets/shane4.png'
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
