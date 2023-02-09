import { Component, Input, Output } from '@angular/core';
import { Tweet } from './shared/model/tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter_web3';

  @Output()
  public tweets: Tweet[] = [];

  public constructor(){

    let tweet1 = new Tweet(new Date, "hola tweeter", "Juan", 20, [], [], []);
    let tweet2 = new Tweet(new Date, "jaja eso me dolio", "Raul", 12, [], [], []);
    let tweet3 = new Tweet(new Date, "adios a todo el mundo, me voy", "Maria", 4, [], [], []);
    let tweet4 = new Tweet(new Date, "pam pam pam , dijo Daddy Wisin & Yandel", "Pedro", 65, [], [], []);

    this.tweets.push(tweet1);
    this.tweets.push(tweet2);
    this.tweets.push(tweet3);
    this.tweets.push(tweet4);

  }
}

