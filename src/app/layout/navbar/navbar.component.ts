import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService, public breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedUser();
    // console.log("Logged user:", this.user);
  }

}
