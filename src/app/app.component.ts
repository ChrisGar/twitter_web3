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

  }
}

