import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-planning-wk1-l2-video',
  templateUrl: './planning-wk1-l2-video.component.html',
  styleUrls: ['./planning-wk1-l2-video.component.css']
})
export class PlanningWk1L2VideoComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  videoPlaying = false;
  constructor() { }

  ngOnInit(): void {
  }

  playVideo() {
    this.videoPlaying = true;
    setTimeout(() => {
      this.videoPlayer.nativeElement.play();
    }, 0);
  }
}
