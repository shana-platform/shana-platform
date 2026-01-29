import { Component, OnInit } from '@angular/core';
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
  
  // Update these paths to where your actual images are stored
  availableStickers: Sticker[] = [
    { name: 'Listening', desc: 'I listen carefully', imageUrl: 'assets/sticker-ear.png' },
    { name: 'Kindness', desc: 'I show kindness', imageUrl: 'assets/sticker-heart.png' },
    { name: 'Taking Turns', desc: 'I wait my turn', imageUrl: 'assets/sticker-hand.png' },
    { name: 'Respect', desc: 'I show respect', imageUrl: 'assets/happy-star.png' },
  ];

  selectedStickers: Sticker[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addSticker(sticker: Sticker) {
    // We push a copy so each sticker instance is unique
    this.selectedStickers.push({ ...sticker });
  }

  reset() {
    this.selectedStickers = [];
    this.userName = '';
  }

  save() {
    this.showModal = true;
    // if (this.selectedStickers.length === 0) {
    //   alert("Add some stickers to your poster first!");
    //   return;
    // }
    // alert(`Poster for ${this.userName || 'Student'} saved successfully!`);
  }
}
