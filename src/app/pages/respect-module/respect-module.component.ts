import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'app-respect-module',
  templateUrl: './respect-module.component.html',
  styleUrls: ['./respect-module.component.css']
})
export class RespectModuleComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.user = this.authService.getLoggedUser();
  }
}
