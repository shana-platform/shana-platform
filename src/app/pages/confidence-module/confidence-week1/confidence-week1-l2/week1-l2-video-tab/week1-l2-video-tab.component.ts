import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-week1-l2-video-tab',
  templateUrl: './week1-l2-video-tab.component.html',
  styleUrls: ['./week1-l2-video-tab.component.css']
})
export class Week1L2VideoTabComponent implements OnInit {
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
