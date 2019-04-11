import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FeedsService } from './../feeds.service';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css']
})
export class FeedDetailComponent implements OnInit {
  slug: any
  feed =  [];

  constructor(private feedsService: FeedsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.slug = this.activatedRoute.snapshot.url[2].path ? this.activatedRoute.snapshot.url[2].path : '';
  }

  ngOnInit() {   
    this.feedsService.getFeedBySlug(this.slug).subscribe(
        data  => {
          if(data.status==false)
            this.router.navigate(['feeds']);
            
          this.feed = data.data;
        },
        error  => {
          console.log("Error: ", error);
        });
  }

}