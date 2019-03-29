import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {
    if(!this.authService.isAuthenticated()){
        this.router.navigate(['login'])      
    }
  }

  ngOnInit() {
  }

}