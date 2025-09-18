import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weeklyview',
  templateUrl: './weeklyview.component.html',
  styleUrls: ['./weeklyview.component.css']
})
export class WeeklyviewComponent implements OnInit {

  @Input() data:any;
  @Input() config:any;

  weekInformation:any;
  weekConfiguration:any;
  constructor() { }


  ngOnInit(): void {

  }

}
