import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-respect-wk2-l1-story',
  templateUrl: './respect-wk2-l1-story.component.html',
  styleUrls: ['./respect-wk2-l1-story.component.css']
})
export class RespectWk2L1StoryComponent implements OnInit {
  slides = [
    {
      image: 'assets/RW2P1.png'
    },
    {
      image: 'assets/RW2P2.png'
    },
    {
      image: 'assets/RW2P3.png'
    },
    {
      image: 'assets/RW2P4.png'
    },
    {
      image: 'assets/RW2P5.png'
    },
    {
      image: 'assets/RW2P6.png'
    },
    {
      image: 'assets/RW2P7.png'
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
