import { Component, OnInit } from '@angular/core';
// Import Angular CDK types for drag and drop functionality
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

// Define the interfaces outside the class for proper modularity
export interface PlanningStep {
  id: number;
  text: string;
  order: number; // The correct numerical order (1 to 5)
  isPlaced: boolean; // For visual tracking if the step is currently in a slot
}

export interface OrderSlot {
  orderNumber: number; // 1, 2, 3, 4, 5
  placedStepId: number | null; // ID of the step placed here, or null
}

@Component({
  selector: 'app-planning-week4-l1',
  templateUrl: './planning-week4-l1.component.html',
  styleUrls: ['./planning-week4-l1.component.css']
})
export class PlanningWeek4L1Component implements OnInit {

  steps = [
    'Check if your plan worked',
    'Think about what you need',
    'Do your tasks',
    'Set a goal',
    'Prepare your materials'
  ];

  orderSlots: string[] = ['', '', '', '', ''];

  correctOrder = [
    'Think about what you need',
    'Set a goal',
    'Prepare your materials',
    'Do your tasks',
    'Check if your plan worked'
  ];

  showResult = false;
  isCorrect = false;

  constructor() { }

  ngOnInit() { }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  checkAnswer() {
    this.showResult = true;
    this.isCorrect = JSON.stringify(this.orderSlots) === JSON.stringify(this.correctOrder);
  }

  tryAgain() {
    this.steps = [...this.steps, ...this.orderSlots.filter(s => s)];
    this.orderSlots = ['', '', '', '', ''];
    this.showResult = false;
  }
}