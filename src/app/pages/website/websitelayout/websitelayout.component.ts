import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-websitelayout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './websitelayout.component.html',
  styleUrls: ['./websitelayout.component.css']
})
export class WebsitelayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
