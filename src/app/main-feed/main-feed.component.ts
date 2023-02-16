import { Component, Output } from '@angular/core';
import { Tweet } from '../shared/model/tweet';
import { TweetService } from '../shared/tweetService/tweet.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent {

  public tweets: Tweet[] = [];

  public constructor(public tweetService: TweetService){

    this.tweets = tweetService.getTweets();

  }

}
