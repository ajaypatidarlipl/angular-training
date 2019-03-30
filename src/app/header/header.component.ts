import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { MessageService } from './../messages/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService, private messageService: MessageService) {
  }

  ngOnInit() {
  }

  isLoggedIn(){
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.messageService.add('You have logged out!', 'success');
    this.router.navigate(['login'])
  }
}