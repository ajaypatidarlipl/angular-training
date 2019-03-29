import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  is_logged_in = 0; 
  constructor(private router: Router, private authService: AuthService) {
    this.is_logged_in = this.authService.isAuthenticated();
  }

  ngOnInit() {
  }

  logout() {
    localStorage.setItem('is_logged_in', '');
    this.router.navigate(['login'])
  }
}