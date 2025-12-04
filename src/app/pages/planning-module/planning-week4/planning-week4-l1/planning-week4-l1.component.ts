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

  pageTag: string = 'Warm-Up Game';
  pageTitle: string = 'Plan Relay';
  instructions: string = 'Drag and drop the steps into the correct planning order';

  // The steps available to be dragged
  availableSteps: PlanningStep[] = [
    { id: 1, text: 'Set a goal', order: 1, isPlaced: false },
    { id: 2, text: 'Think about what you need', order: 2, isPlaced: false },
    { id: 3, text: 'Prepare your materials', order: 3, isPlaced: false },
    { id: 4, text: 'Do your tasks', order: 4, isPlaced: false },
    { id: 5, text: 'Check if your plan worked', order: 5, isPlaced: false }
  ];

  // The slots where the user drops the steps
  userOrder: OrderSlot[] = [
    { orderNumber: 1, placedStepId: null },
    { orderNumber: 2, placedStepId: null },
    { orderNumber: 3, placedStepId: null },
    { orderNumber: 4, placedStepId: null },
    { orderNumber: 5, placedStepId: null }
  ];

  isAnswerChecked: boolean = false;
  allCorrect: boolean = false;

  // The TypeScript array version of the steps to arrange (used by CDK to track items)
  // We initialize it with all steps that are NOT yet placed (which is all of them at start)
  stepsInArrangementList: PlanningStep[] = [...this.availableSteps];


  constructor() { }

  ngOnInit(): void { }

  // --- Utility Getters ---

  getPlacedStepText(stepId: number | null): string {
    if (stepId === null) {
        return '';
    }
    const step = this.availableSteps.find(s => s.id === stepId);
    return step ? step.text : 'Error: Step not found';
  }
  
  // Helper to retrieve the full step object by its ID (for the cdkDragData in the HTML)
  getStepById(stepId: number): PlanningStep | undefined {
      return this.availableSteps.find(s => s.id === stepId);
  }

  isStepCorrect(stepId: number | null, slotOrder: number): boolean {
    if (stepId === null) {
        return false;
    }
    const placedStep = this.availableSteps.find(s => s.id === stepId);
    return placedStep ? placedStep.order === slotOrder : false;
  }
  
  // --- CDK Drag and Drop Handlers ---

  /** Predicate to ensure only one item can be dropped into a slot (if already full). */
  slotEmptyPredicate(drag: CdkDrag<PlanningStep>, drop: CdkDropList<OrderSlot>): boolean {
    // Check if the target slot already has a placed step
    return drop.data.placedStepId === null;
  }

  /** Handler for dropping a step into one of the final order slots. */
  onSlotDropped(event: CdkDragDrop<PlanningStep, OrderSlot>, targetSlot: OrderSlot): void {
    const droppedStep: PlanningStep = event.item.data;
    const previousContainerId = event.previousContainer.id;

    // 1. Check if the step came from the main 'available steps' list
    if (previousContainerId === 'available-steps-list') {
      // Mark the step as placed and update the slot
      droppedStep.isPlaced = true;
      targetSlot.placedStepId = droppedStep.id;

      // Remove the step from the list of available steps
      const stepIndex = this.stepsInArrangementList.findIndex(s => s.id === droppedStep.id);
      if (stepIndex > -1) {
        this.stepsInArrangementList.splice(stepIndex, 1);
      }
      
    } else {
      // 2. Step was moved from another slot (inter-slot movement is disabled by predicate, but handling just in case)
      console.warn("Inter-slot movement detected - should be prevented by predicate.");
    }
    
    // Always clear answer check on a move
    this.isAnswerChecked = false;
  }
  
  /** Handler for dropping a step back into the main 'available steps' list. */
  onStepDropped(event: CdkDragDrop<PlanningStep[]>): void {
    const droppedStep: PlanningStep = event.item.data;
    
    // Check if the step came from a drop slot
    if (event.previousContainer.id !== 'available-steps-list') {
      const sourceSlot = event.previousContainer.data as unknown as OrderSlot;
      
      // 1. Clear the step's previous slot
      sourceSlot.placedStepId = null;

      // 2. Mark the step as not placed
      droppedStep.isPlaced = false;

      // 3. Add the step back to the available steps array
      this.stepsInArrangementList.push(droppedStep);
    } 
    // If dropped item moved within the same list (which shouldn't happen based on the filter) or from a slot,
    // we don't need `moveItemInArray` since the items are not being re-ordered, just filtered/added back.
    
    // Always clear answer check on a move
    this.isAnswerChecked = false;
  }
  
  // --- Game Logic ---

  checkAnswer(): void {
    let correctCount = 0;
    
    // Check if all slots are filled before checking
    if (this.userOrder.every(slot => slot.placedStepId !== null)) {
      this.userOrder.forEach(slot => {
        if (this.isStepCorrect(slot.placedStepId, slot.orderNumber)) {
          correctCount++;
        }
      });

      this.isAnswerChecked = true;
      this.allCorrect = (correctCount === this.availableSteps.length);
      
      if (this.allCorrect) {
        console.log("All correct! Well done.");
      } else {
        console.log(`Score: ${correctCount}/${this.availableSteps.length}. Try again.`);
      }
    } else {
      alert("Please fill all 5 steps before checking the answer!");
    }
  }

  tryAgain(): void {
    this.isAnswerChecked = false;
    this.allCorrect = false;
    
    // Reset all slots
    this.userOrder.forEach(slot => slot.placedStepId = null);
    
    // Reset all steps and refresh the list
    this.availableSteps.forEach(step => step.isPlaced = false);
    this.stepsInArrangementList = [...this.availableSteps]; // Recreate the available list
  }
}