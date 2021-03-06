import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth-guard.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedsService } from './feeds/feeds.service';
import { FeedDetailComponent } from './feeds/feed-detail/feed-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule ],
  declarations: [ AppComponent, HeaderComponent, LoginComponent, SignupComponent, DashboardComponent, PageNotFoundComponent, MessagesComponent, FeedsComponent, FeedDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AuthService, AuthGuard, MessageService, FeedsService ]
})
export class AppModule { }
