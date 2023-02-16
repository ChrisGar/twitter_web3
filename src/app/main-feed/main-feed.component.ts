import { Component, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tweet } from '../shared/model/tweet';
import { TweetService } from '../shared/tweetService/tweet.service';

@Component({
  selector: 'app-main-feed',
  templateUrl: './main-feed.component.html',
  styleUrls: ['./main-feed.component.scss']
})
export class MainFeedComponent implements OnDestroy {

  public tweets: Tweet[] = [];

  //Guardamos todas las suscripciones que se hagan
  public suscription: Subscription = new Subscription;

  public constructor(public tweetService: TweetService){

    this.tweets = tweetService.getTweets();

    this.suscription = 
      this.tweetService.newTweets$.subscribe(() => {
      this.tweets = this.tweetService.getTweets();
    })
  }

  //se llama cada vez que se destruye el componente
  public ngOnDestroy()
  {
    //Me desuscribo para que no se suscriba 
    //cada vez que se genera el componente
    this.suscription.unsubscribe();
  }

}
