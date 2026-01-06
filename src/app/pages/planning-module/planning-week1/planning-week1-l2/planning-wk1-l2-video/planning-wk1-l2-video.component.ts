import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-wk1-l2-video',
  templateUrl: './planning-wk1-l2-video.component.html',
  styleUrls: ['./planning-wk1-l2-video.component.css']
})
export class PlanningWk1L2VideoComponent implements OnInit {
  slides = [
    {
      image: 'assets/ama-intro.png'
    },
    {
      image: 'assets/ama1.png'
    },
    {
      image: 'assets/ama2.png'
    },
    {
      image: 'assets/ama3.png'
    },
    {
      image: 'assets/ama4.png'
    },
    {
      image: 'assets/ama5.png'
    },
    {
      image: 'assets/ama6.png'
    },
    {
      image: 'assets/ama7.png'
    },
    {
      image: 'assets/ama8.png'
    },
    {
      image: 'assets/ama9.png'
    },
    {
      image: 'assets/ama10.png'
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
