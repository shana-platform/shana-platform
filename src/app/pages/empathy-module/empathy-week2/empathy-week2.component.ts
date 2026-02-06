import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empathy-week2',
  templateUrl: './empathy-week2.component.html',
  styleUrls: ['./empathy-week2.component.css']
})
export class EmpathyWeek2Component implements OnInit {
  selected: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

selectFeeling(feeling: string) {
  this.selected = feeling;
}
}
