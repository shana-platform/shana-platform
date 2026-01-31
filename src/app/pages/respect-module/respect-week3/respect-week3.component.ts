import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Item {
  label: string;
  correctZone: 'right' | 'wrong';
  icon: string;
  status?: 'correct' | 'wrong';
}

@Component({
  selector: 'app-respect-week3',
  templateUrl: './respect-week3.component.html',
  styleUrls: ['./respect-week3.component.css']
})
export class RespectWeek3Component implements OnInit {
  items: Item[] = [
    { label: 'Book on shelf', correctZone: 'right', icon: '📚' },
    { label: 'Shoes in hallway', correctZone: 'wrong', icon: '👟' },
    { label: 'Toys in basket', correctZone: 'right', icon: '🧸' },
    { label: 'Crayons on bed', correctZone: 'wrong', icon: '🖍️' },
    { label: 'Water bottle in bag', correctZone: 'right', icon: '🎒' }
  ];

  rightZone: Item[] = [];
  wrongZone: Item[] = [];

  totalItems = 5;

  constructor(private cdr: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
  }

  get score(): number {
    return [...this.rightZone, ...this.wrongZone]
      .filter(i => i.status === 'correct').length;
  }

  get allSorted(): boolean {
    return this.score === this.totalItems;
  }

  drop(event: CdkDragDrop<Item[]>, zone: 'right' | 'wrong') {
    const item = event.previousContainer.data[event.previousIndex];
  
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  
    item.status = item.correctZone === zone ? 'correct' : 'wrong';
  
    setTimeout(() => {
      this.cdr.detectChanges();
    });
  }

  playAgain() {
    this.items = [...this.items, ...this.rightZone, ...this.wrongZone]
      .map(i => ({ ...i, status: undefined }));

    this.rightZone = [];
    this.wrongZone = [];
  }

  nextLesson() {
    this.router.navigate(['/respect-week3-l1']);
  }
}
