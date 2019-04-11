import { Component, OnInit } from '@angular/core';
import { FeedsService } from './feeds.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  feeds = [];

  constructor(private feedsService: FeedsService) { }

  ngOnInit() {
    this.feedsService.getFeeds().subscribe(
        data  => {
          this.feeds = data.data;
        },
        error  => {
          console.log("Error: ", error);
        }); 
  }

}