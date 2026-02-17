import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Item {
  label: string;
  isEmpathy: boolean;
}

@Component({
  selector: 'app-empathy-wk3-l1',
  templateUrl: './empathy-wk3-l1.component.html',
  styleUrls: ['./empathy-wk3-l1.component.css']
})
export class EmpathyWk3L1Component implements OnInit {

  options: Item[] = [
    { label: 'Sharing toys', isEmpathy: true },
    { label: 'Saying “Are you okay?”', isEmpathy: true },
    { label: 'Helping someone up', isEmpathy: true },
    { label: 'Laughing at mistakes', isEmpathy: false },
    { label: 'Ignoring someone who is crying', isEmpathy: false },
    { label: 'Calling names', isEmpathy: false }
  ];

  kind: Item[] = [];
  notKind: Item[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Item[]>, isKindBox: boolean) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  get sortedCount(): number {
    return this.kind.length + this.notKind.length;
  }

  get allCorrect(): boolean {
    return (
      this.sortedCount === 6 &&
      this.kind.every(i => i.isEmpathy) &&
      this.notKind.every(i => !i.isEmpathy)
    );
  }

  nextLesson() {
    console.log('Proceeding to next lesson');
    this.router.navigate(['/empathy-week3-l2']);
  }
}
