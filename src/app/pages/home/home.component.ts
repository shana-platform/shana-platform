import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/pages.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText = '';
  assignments: Assignment[] = [
    {
      title: "Create a 5-page booklet about YOU!",
      description: "Design a personal booklet that showcases who you are, your strengths, and your journey...",
      pages: [
        "My name and why it's special",
        "What makes me unique",
        "My strengths",
        "A good choice I made",
        "My identity plan"
      ],
      due: "Next Friday",
      mode: "Both",
      difficulty: "Medium"
    },
    {
      title: "Family Heritage Project",
      description: "Explore your family history and create a visual presentation...",
      pages: [
        "Family tree diagram",
        "Cultural traditions we follow",
        "Stories from older generations",
        "Special family recipes or customs",
        "How heritage shapes who I am"
      ],
      due: "In 2 weeks",
      mode: "Digital",
      difficulty: "Easy"
    },
    {
      title: "Future Goals Vision Board",
      description: "Create an inspiring vision board that maps out your dreams, goals, and steps...",
      pages: [
        "My big dreams and aspirations",
        "Short-term goals (this year)",
        "Long-term goals (5-10 years)",
        "People who inspire me",
        "Action steps I can take now"
      ],
      due: "Next Monday",
      mode: "Hand-made",
      difficulty: "Easy"
    },
    {
      title: "Community Hero Profile",
      description: "Research and create a comprehensive profile of someone in your community...",
      pages: [
        "Introduction to my chosen hero",
        "Their background and journey",
        "How they help the community",
        "Challenges they've overcome",
        "What I learned from them"
      ],
      due: "In 10 days",
      mode: "Digital",
      difficulty: "Hard"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  startAssignment() {
    // console.log('Assignment started:', this.assignment.title);
  }
}
