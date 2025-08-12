import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-week-level5',
  templateUrl: './first-week-level5.component.html',
  styleUrls: ['./first-week-level5.component.css']
})
export class FirstWeekLevel5Component implements OnInit {
  userName: string = 'Your Name';
  isEditingName: boolean = false;
  favorites: string[] = ['🎧 Reading', '🎵 Music', '💃 dance'];
  newFavorite: string = '';
  uniqueTrait: string = '';
isEditingTrait: boolean = false;
isCelebrateModalOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  enableEdit() {
    this.isEditingName = true;
  }

  saveName() {
    this.isEditingName = false;
    // Optionally save to backend/localStorage here
  }

  addFavorite() {
    const trimmed = this.newFavorite.trim();
    if (trimmed && !this.favorites.includes(trimmed)) {
      this.favorites.push(trimmed);
    }
    this.newFavorite = '';
  }

  removeFavorite(index: number) {
    this.favorites.splice(index, 1);
  }

  startEditingTrait() {
    this.isEditingTrait = true;
  }
  
  saveTrait() {
    this.isEditingTrait = false;
    this.uniqueTrait = this.uniqueTrait.trim();
  }
  openCelebrateModal() {
    this.isCelebrateModalOpen = true;
  }
  
  closeCelebrateModal() {
    this.isCelebrateModalOpen = false;
  }
}
