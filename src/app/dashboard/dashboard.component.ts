import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  is_logged_in = false; 
  constructor(private router: Router) {
    this.is_logged_in = localStorage.getItem('is_logged_in');
    if(this.is_logged_in!=1){
        this.router.navigate(['login'])      
    }
  }

  ngOnInit() {
  }

}