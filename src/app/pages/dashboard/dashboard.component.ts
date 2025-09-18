import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../core/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weeklyContent:any = [];
  userId = ''
  isUser = false;
  greeeting = '';
  constructor(private route:ActivatedRoute,private http:HttpService ) {

   }

  ngOnInit(): void {
    let role = this.http.localData('role','','get');
    if(role == 'user'){this.isUser =true;}else{this.isUser =false;}


    this.fetchWeekData(this.userId);
    this.greeeting =  this.getGreeting();
  }


  fetchWeekData(userId:string){
    this.weeklyContent = [
  {
    "id": 1001,
    "name": "  What Makes Me Unique?",
    "kind":"AWARENESS",
    "description": "Learners reflect on Mirabel’s story and explore the importance of uniqueness.",
    "config": {
      "type": "options",
      "theme": "light",
      "primaryColor": "#4A90E2",
      "secondaryColor": "#F5A623",
      "showProgressBar": true,
      "progressPercentage": 0,
      "icon": "🌟"
    }
  },
  {
    "id": 1002,
    "name": " My Strengths",
    "kind":"PRACTICE",
    "description": "Learners explore personal strengths through stories and discussion.",
    "config": {
      "type": "bigcard",
      "theme": "dark",
      "primaryColor": "#2ECC71",
      "secondaryColor": "#27AE60",
      "showProgressBar": true,
      "progressPercentage": 20,
      "icon": "💪"
    }
  },
  {
    "id": 1003,
    "name": "  My Choices",
    "kind":"PRACTICE",

    "description": "Learners understand decision making and its impact on growth.",
    "config": {
      "type": "background",
      "theme": "light",
      "primaryColor": "#E74C3C",
      "secondaryColor": "#F39C12",
      "showProgressBar": true,
      "progressPercentage": 40,
      "icon": "⚖️"
    }
  },
  {
    "id": 1004,
    "name": "  I Am Proud of Me",
    "kind":"MASTERY",

    "description": "Learners reflect on achievements and celebrate small wins.",
    "config": {
      "type": "bigcard",
      "theme": "light",
      "primaryColor": "#9B59B6",
      "secondaryColor": "#8E44AD",
      "showProgressBar": true,
      "progressPercentage": 60,
      "icon": "🏆"
    }
  },
  {
    "id": 1005,
    "name": "  My Goals",
    "kind":"MASTERY",
    "description": "Learners set personal goals and explore ways to achieve them.",
    "config": {
      "type": "options",
      "theme": "dark",
      "primaryColor": "#34495E",
      "secondaryColor": "#2C3E50",
      "showProgressBar": true,
      "progressPercentage": 80,
      "icon": "🎯"
    }
  }
]
  }

  getGreeting(): string {
  const now = new Date();
  const hour = now.getHours(); // returns 0–23

  if (hour >= 5 && hour < 12) {
    return 'Good morning';
  } else if (hour >= 12 && hour < 17) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}
}
