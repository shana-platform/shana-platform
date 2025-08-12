import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-first-week-level4',
  templateUrl: './first-week-level4.component.html',
  styleUrls: ['./first-week-level4.component.css']
})
export class FirstWeekLevel4Component implements OnInit {
  cardForm!: FormGroup;
  isModalOpen = false;
  name: any;
  specialty: any;
  age: any;
  color: any;
  constructor() {
   }

  ngOnInit(): void {
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  proceedToNextLesson() {
    console.log("Proceeding to next lesson...");
    this.closeModal();
  }
}
