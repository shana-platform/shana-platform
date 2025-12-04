import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning-week2-level1',
  templateUrl: './planning-week2-level1.component.html',
  styleUrls: ['./planning-week2-level1.component.css']
})
export class PlanningWeek2Level1Component implements OnInit {
  places = [
    { name: 'School', image: 'assets/school.png' },
    { name: 'Market', image: 'assets/market.png' },
    { name: 'Park', image: 'assets/park.png' },
    { name: 'Home', image: 'assets/home.png' }
  ];

  planSlots: any[] = [null, null, null, null];
  
  constructor() { }

  ngOnInit(): void {
  }


  onDrop(event: CdkDragDrop<any[]>) {

    // If dropping onto the plan area
    if (event.container.id === 'planList') {
      const dragged = event.item.data;
  
      // Prevent duplicates
      if (this.planSlots.includes(dragged)) return;
  
      // Find first empty slot
      const emptyIndex = this.planSlots.findIndex(s => !s);
      if (emptyIndex !== -1) {
        this.planSlots[emptyIndex] = dragged;
      }
    }
  
    // If dragging back to list (optional)
    if (event.container.id === 'visitList') {
      const dragged = event.item.data;
      const index = this.planSlots.findIndex(s => s === dragged);
      if (index !== -1) {
        this.planSlots[index] = null;
      }
    }
  
  }
  
  get allFilled() {
    return this.planSlots.every(slot => slot !== null);
  }
  
  removeFromSlot(index: number) {
    this.planSlots[index] = null;
  }
  
  reset() {
    this.planSlots = [null, null, null, null];
  }
}
