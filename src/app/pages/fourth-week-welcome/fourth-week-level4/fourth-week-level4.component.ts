import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-week-level4',
  templateUrl: './fourth-week-level4.component.html',
  styleUrls: ['./fourth-week-level4.component.css']
})
export class FourthWeekLevel4Component implements OnInit {
showReactionModal = false;
  constructor() { }

  ngOnInit(): void {
  }

  shareMoment(){
    this.showReactionModal = true;
  }
}
