import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProgressService } from 'src/app/core/services/progress.service';
import { StudentService } from 'src/app/core/services/student.service';

interface Sticker {
  name: string;
  desc: string;
  imageUrl: string;
}

@Component({
  selector: 'app-respect-wk2-l1-activity',
  templateUrl: './respect-wk2-l1-activity.component.html',
  styleUrls: ['./respect-wk2-l1-activity.component.css']
})
export class RespectWk2L1ActivityComponent implements OnInit {
  userName: string = '';
  showModal = false;
  
  // New variables for interactivity
  maxStickers: number = 6; 
  errorMessage: string = '';

  availableStickers: Sticker[] = [
    { name: 'Listening', desc: 'I listen carefully', imageUrl: 'assets/sticker-ear.png' },
    { name: 'Kindness', desc: 'I show kindness', imageUrl: 'assets/sticker-heart.png' },
    { name: 'Taking Turns', desc: 'I wait FOR my turn', imageUrl: 'assets/sticker-hand.png' },
    { name: 'Respect', desc: 'I show respect', imageUrl: 'assets/happy-star.png' },
  ];

  selectedStickers: Sticker[] = [];

  constructor(private studentService: StudentService, private authService: AuthService, private progressService: ProgressService) { }

  ngOnInit(): void {
  }

  // UPDATED: Check limits before adding
  addSticker(sticker: Sticker) {
    this.errorMessage = ''; // Clear any previous errors

    if (this.selectedStickers.length >= this.maxStickers) {
      this.errorMessage = `Your poster is full! You can only add ${this.maxStickers} stickers. Click one on the poster to remove it.`;
      return;
    }

    this.selectedStickers.push({ ...sticker });
  }

  // NEW: Allow students to remove a sticker they don't want
  removeSticker(index: number) {
    this.selectedStickers.splice(index, 1);
    this.errorMessage = ''; // Clear errors if they make a change
  }

  reset() {
    this.selectedStickers = [];
    this.userName = '';
    this.errorMessage = '';
  }

  save() {
    if (!this.userName.trim()) {
      this.errorMessage = "Please enter your name for the poster!";
      return;
    }
    if (this.selectedStickers.length === 0) {
      this.errorMessage = "Please add at least one sticker to your poster!";
      return;
    }
    this.errorMessage = '';
    this.showModal = true;
    this.studentService.updateUserStats({ stars: 1, modulesCompleted: 0, badges: 0, trophies: 0 });
    alert(`You earned 1 star!`);
  }

    proceedToNextLesson() {
    this.showModal = false;
    this.progressService.updateProgress('week2', 70);
  }
}