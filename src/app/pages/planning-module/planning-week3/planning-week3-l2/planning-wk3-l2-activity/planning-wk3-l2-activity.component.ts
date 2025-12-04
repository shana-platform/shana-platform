import { Component, OnInit } from '@angular/core';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface GoalExample {
  icon: string; // e.g., 'bi-book-half', 'bi-bag', 'bi-music-note-list' (Bootstrap Icons)
  text: string;
}

export interface GoalOptions {
  activities: DropdownOption[];
  minutes: DropdownOption[];
  times: DropdownOption[];
  weeks: DropdownOption[];
}

@Component({
  selector: 'app-planning-wk3-l2-activity',
  templateUrl: './planning-wk3-l2-activity.component.html',
  styleUrls: ['./planning-wk3-l2-activity.component.css']
})
export class PlanningWk3L2ActivityComponent implements OnInit {
  pageTitle: string = 'Create Your SMART Goal';
  pageSubtitle: string = 'Build a goal that’s Specific, Measurable, Achievable, Relevant, and Time-bound!';

  // --- Dynamic Form Values (Default/Selected) ---
  selectedActivity: string = 'read';
  selectedMinutes: number = 5;
  selectedTime: string = 'after lunch';
  selectedWeeks: number = 1;
  
  customActivity: string = '';

  // --- Static Dropdown Options ---
  options: GoalOptions = {
    activities: [
      { value: 'read', label: 'read' },
      { value: 'exercise', label: 'exercise' },
      { value: 'practice math', label: 'practice math' },
      { value: 'write in my journal', label: 'write in my journal' },
      { value: 'meditate', label: 'meditate' },
      { value: 'study', label: 'study' },
      { value: 'draw', label: 'draw' },
      { value: 'practice an instrument', label: 'practice an instrument' },
      { value: 'clean my room', label: 'clean my room' },
      { value: 'pack my school bag', label: 'pack my school bag' },
    ],
    minutes: [
      { value: '5', label: '5' },
      { value: '10', label: '10' },
      { value: '15', label: '15' },
      { value: '20', label: '20' },
      { value: '30', label: '30' },
      { value: '45', label: '45' },
      { value: '60', label: '60' },
    ],
    times: [
      { value: 'morning', label: 'morning' },
      { value: 'after breakfast', label: 'after breakfast' },
      { value: 'after lunch', label: 'after lunch' },
      { value: 'after school', label: 'after school' },
      { value: 'after dinner', label: 'after dinner' },
      { value: 'before bed', label: 'before bed' },
    ],
    weeks: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
    ]
  };

  // --- Example Goals (as seen in the image) ---
  exampleGoals: GoalExample[] = [
    { icon: 'bi-book-half', text: 'I will read for 10 minutes after dinner every day for one week.' },
    { icon: 'bi-bag', text: 'I will pack my school bag every night before bed for one week.' },
    { icon: 'bi-music-note-list', text: 'I will practice piano for 15 minutes after school every day for two weeks.' }
  ];

  constructor() { }

  ngOnInit(): void { }

  // Getter to dynamically construct the SMART Goal sentence
  get smartGoalStatement(): string {
    let activity = this.selectedActivity;
    let time = this.selectedTime;
    
    // If user types in the custom field, use that activity instead
    if (this.customActivity.trim() !== '') {
        activity = this.customActivity.trim();
        // Capitalize for better sentence structure if using custom text
        activity = activity.charAt(0).toLowerCase() + activity.slice(1);
    }

    // Handle initial state placeholder texts
    if (activity === 'choose activity') activity = 'do something';
    if (time === 'when') time = 'a set time';

    return `I will ${activity} for ${this.selectedMinutes} minutes ${time} every day for ${this.selectedWeeks} week${this.selectedWeeks > 1 ? 's' : ''}.`;
  }
}
