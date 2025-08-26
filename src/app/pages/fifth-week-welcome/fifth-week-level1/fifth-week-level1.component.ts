import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-week-level1',
  templateUrl: './fifth-week-level1.component.html',
  styleUrls: ['./fifth-week-level1.component.css']
})
export class FifthWeekLevel1Component implements OnInit {
  studentInput: string = '';
  messages: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  get currentTime(): string {
    const now = new Date();
    return now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
  }

  sendMessage() {
    if (this.studentInput.trim() !== '') {
      this.messages.push(this.studentInput);
      this.studentInput = '';
    }
  }
}
