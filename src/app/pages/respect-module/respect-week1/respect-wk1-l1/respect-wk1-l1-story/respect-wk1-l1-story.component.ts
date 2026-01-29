import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respect-wk1-l1-story',
  templateUrl: './respect-wk1-l1-story.component.html',
  styleUrls: ['./respect-wk1-l1-story.component.css']
})
export class RespectWk1L1StoryComponent implements OnInit {
  slides = [
    {
      image: 'assets/RW1P1.png'
    },
    {
      image: 'assets/RW1P2.png'
    },
    {
      image: 'assets/RW1P3.png'
    },
    {
      image: 'assets/RW1P4.png'
    },
    {
      image: 'assets/RW1P5.png'
    },
    {
      image: 'assets/RW1P6.png'
    },
    {
      image: 'assets/RW1P7.png'
    },
    {
      image: 'assets/RW1P8.png'
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
