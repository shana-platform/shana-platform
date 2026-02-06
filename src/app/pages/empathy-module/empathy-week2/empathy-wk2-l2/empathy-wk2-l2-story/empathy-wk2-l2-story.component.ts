import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empathy-wk2-l2-story',
  templateUrl: './empathy-wk2-l2-story.component.html',
  styleUrls: ['./empathy-wk2-l2-story.component.css']
})
export class EmpathyWk2L2StoryComponent implements OnInit {
  slides = [
    {
      image: 'assets/EW2P1.png'
    },
    {
      image: 'assets/EW2P2.png'
    },
    {
      image: 'assets/EW2P3.png'
    },
    {
      image: 'assets/EW2P4.png'
    },
    {
      image: 'assets/EW2P5.png'
    },
    {
      image: 'assets/EW2P6.png'
    },
    {
      image: 'assets/EW2P7.png'
    },
    {
      image: 'assets/EW2P8.png'
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
