import { Injectable } from '@angular/core';
import { Tweet } from '../model/tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor() { }

  public getTweets(): Tweet[]
  {
    let tweets: Tweet[] = [];
    let tweet1 = new Tweet(new Date, "hola tweeter", "Juan", 20, [], [], []);
    let tweet2 = new Tweet(new Date, "jaja eso me dolio", "Raul", 12, [], [], []);
    let tweet3 = new Tweet(new Date, "adios a todo el mundo, me voy", "Maria", 4, [], [], []);
    let tweet4 = new Tweet(new Date, "pam pam pam , dijo Daddy Wisin & Yandel", "Pedro", 65, [], [], []);

    tweets.push(tweet1);
    tweets.push(tweet2);
    tweets.push(tweet3);
    tweets.push(tweet4);

    return tweets;
  }
}
