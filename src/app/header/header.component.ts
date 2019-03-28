import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  is_logged_in = false; 
  constructor(private router: Router) {
    this.is_logged_in = localStorage.getItem('is_logged_in');
  }

  ngOnInit() {
  }

  logout() {
    localStorage.setItem('is_logged_in', 0);
    this.router.navigate(['login'])
  }
}