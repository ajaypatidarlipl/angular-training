import { Component, OnInit } from '@angular/core';
import { FeedsService } from './../feeds.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css']
})
export class FeedDetailComponent implements OnInit {

  constructor(private feedsService: FeedsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}