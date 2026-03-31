import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private storageKey = 'shana_user_progress';

  private progressSource = new BehaviorSubject<{ [key: string]: number }>({
    week1: 0, week2: 0, week3: 0, week4: 0
  });

  currentProgress$ = this.progressSource.asObservable();

  constructor() {
    this.loadInitialProgress();
  }

  private loadInitialProgress() {
    const savedData = localStorage.getItem(this.storageKey);
    
    if (savedData) {
      this.progressSource.next(JSON.parse(savedData));
    } else {
      const defaultState = { week1: 0, week2: 0, week3: 0, week4: 0 };
      this.progressSource.next(defaultState);
      localStorage.setItem(this.storageKey, JSON.stringify(defaultState));
    }
  }

  updateProgress(weekKey: string, percentage: number) {
    const currentProgress = this.progressSource.value;
    const newState = {
      ...currentProgress,
      [weekKey]: percentage
    };
    this.progressSource.next(newState);
    localStorage.setItem(this.storageKey, JSON.stringify(newState));
  }
  resetProgress() {
    const defaultState = { week1: 0, week2: 0, week3: 0, week4: 0 };
    this.progressSource.next(defaultState);
    localStorage.setItem(this.storageKey, JSON.stringify(defaultState));
  }
}
