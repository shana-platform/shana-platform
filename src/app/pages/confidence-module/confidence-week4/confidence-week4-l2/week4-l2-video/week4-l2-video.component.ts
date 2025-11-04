import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-week4-l2-video',
  templateUrl: './week4-l2-video.component.html',
  styleUrls: ['./week4-l2-video.component.css']
})
export class Week4L2VideoComponent implements OnInit {
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
