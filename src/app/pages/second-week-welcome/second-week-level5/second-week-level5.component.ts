import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-week-level5',
  templateUrl: './second-week-level5.component.html',
  styleUrls: ['./second-week-level5.component.css']
})
export class SecondWeekLevel5Component implements OnInit {
  score = 0;
  matches = 0;
  selectedStrength: HTMLElement | null = null;
  selectedAction: HTMLElement | null = null;

  toastMessage = '';
  toastDetail = '';
  toastSuccess = true;
  showToast = false;
  showCongratsModal = false;


  correctPairs: { [key: string]: string } = {
    'Kind': 'Supporting Friends',
    'Funny': 'Making People Laugh',
    'Brave': 'Facing Challenges',
    'Creative': 'Making Art',
    'Smart': 'Learning & Reading',
    'Helpful': 'Helping Others',
  };

  ngOnInit(): void {
    const strengthCards = document.querySelectorAll('.strength-card');
    const actionCards = document.querySelectorAll('.action-card');

    strengthCards.forEach(card => {
      card.addEventListener('click', () => {
        console.log('Strength clicked:', card.textContent?.trim());
        this.selectStrength(card as HTMLElement);
      });
    });

    actionCards.forEach(card => {
      card.addEventListener('click', () => {
        const text = card.textContent?.trim() || '';
        console.log('Action clicked:', text);
        this.selectAction(card as HTMLElement);
      });
    });

    const startBtn = document.querySelector('.start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    const resetBtn = document.querySelector('.reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.resetGame());
    }
  }

  selectStrength(card: HTMLElement) {
    this.selectedStrength = card;
    card.classList.add('selected');
    if (this.selectedAction) {
      this.checkMatch();
    }
  }

  selectAction(card: HTMLElement) {
    this.selectedAction = card;
    card.classList.add('selected');
    if (this.selectedStrength) {
      this.checkMatch();
    }
  }

  checkMatch() {
    const strength = this.selectedStrength?.textContent?.trim() || '';
    const action = this.selectedAction?.textContent?.trim() || '';
  
    const isCorrect = this.correctPairs[strength] === action;
  
    if (isCorrect) {
      this.score += 10;
      this.matches += 1;
  
      this.selectedStrength?.classList.add('correct');
      this.selectedAction?.classList.add('correct');
      this.showMatchToast(true, 'Perfect Match! 🎉', `${strength} matches perfectly!`);
  
      // ✅ Show modal when all 6 matches are done
      if (this.matches === 6) {
        setTimeout(() => {
          this.showCongratsModal = true;
        }, 1000);
      }
  
    } else {
      this.selectedStrength?.classList.add('wrong');
      this.selectedAction?.classList.add('wrong');
      this.showMatchToast(false, 'Oops! ❌', `${strength} doesn’t match ${action}`);
    }
  
    setTimeout(() => {
      this.clearSelections();
      this.updateUI();
    }, 1000);
  }
  
  showMatchToast(success: boolean, title: string, detail: string) {
    this.toastSuccess = success;
    this.toastMessage = title;
    this.toastDetail = detail;
    this.showToast = true;
  
    setTimeout(() => {
      this.showToast = false;
    }, 2000); // hide after 2 seconds
  }

  
  // checkMatch() {
  //   const strength = this.selectedStrength?.textContent?.trim() || '';
  //   const action = this.selectedAction?.textContent?.trim() || '';

  //   if (this.correctPairs[strength] === action) {
  //     console.log(`✅ Match: ${strength} ↔ ${action}`);
  //     this.score += 10;
  //     this.matches += 1;
  //   } else {
  //     console.log(`❌ No match: ${strength} ↔ ${action}`);
  //   }

  //   // Reset selection after checking
  //   this.clearSelections();
  //   this.updateUI();
  // }
  clearSelections() {
    this.selectedStrength?.classList.remove('selected', 'correct', 'wrong');
    this.selectedAction?.classList.remove('selected', 'correct', 'wrong');
    this.selectedStrength = null;
    this.selectedAction = null;
  }
  
  // clearSelections() {
  //   this.selectedStrength?.classList.remove('selected');
  //   this.selectedAction?.classList.remove('selected');
  //   this.selectedStrength = null;
  //   this.selectedAction = null;
  // }

  updateUI() {
    const scoreEl = document.querySelector('.status-number.blue');
    const matchesEl = document.querySelector('.status-number.green');

    if (scoreEl) scoreEl.textContent = this.score.toString();
    if (matchesEl) matchesEl.textContent = `${this.matches}/6`;
  }

  startGame() {
    console.log('🎮 Game started');
    this.resetGame();
  }

  resetGame() {
    console.log('🔄 Game reset');
    this.score = 0;
    this.matches = 0;
    this.clearSelections();
    this.updateUI();
    this.showCongratsModal = false;

  }
}
