import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css']
})
export class GamesPageComponent implements OnInit {
  games = [
    { name: 'Kahoot - Using My Strengths', link: '/second-week-level5'  },
    { name: 'My Hero Me', link: '/third-week-level5'  },
    { name: 'Wheel Of Names', link: 'https://wheelofnames.com/5py-vhj'  },
    { name: 'This_or_That_Me_Game', link: 'https://docs.google.com/presentation/d/1Y3d73Dlrcf-seAgVRZgfm5Vz5scWoctI/edit?slide=id.p11#slide=id.p11'  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
