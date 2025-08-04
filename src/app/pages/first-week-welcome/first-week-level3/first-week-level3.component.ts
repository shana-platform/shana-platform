import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-week-level3',
  templateUrl: './first-week-level3.component.html',
  styleUrls: ['./first-week-level3.component.css']
})
export class FirstWeekLevel3Component implements OnInit {
  showModal: boolean = false;
  selectedCard: string | null = null;
  name: string = '';
  thoughts: string = '';
  showPopup = false;
  selectedTab: string = 'thoughts';

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  openModal(): void {
    console.log('clicked')
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  outsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.id === 'congratsModal') {
      this.closeModal();
    }
  }

  selectCard(cardText: string) {
    this.selectedCard = cardText;
  }
  
  onShareReflection() {
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 2500);
    this.selectedCard = ''
  }
}
