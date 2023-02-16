import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tweet } from '../model/tweet';
import { User } from '../model/user';
import { UsuarioService } from '../usuarioService/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  protected tweets: Tweet[] = [];

  //Subject = observable que permite sincronizar las peticiones
  //del lado del servidor y enviarlas a un observer (.suscribe)
  public newTweets$ = new Subject();

  public constructor(protected userService: UsuarioService)
  {
    let author: User | null = this.userService.getUser("@juanPdr");

    if(author != null)
    {
      let tweet1 = new Tweet(new Date, "hola tweeter", author, 20, [], [], []);
      let tweet2 = new Tweet(new Date, "jaja eso me dolio", author, 12, [], [], []);
      let tweet3 = new Tweet(new Date, "adios a todo el mundo, me voy", author, 4, [], [], []);
      let tweet4 = new Tweet(new Date, "pam pam pam , dijo Wisin & Yandel", author, 65, [], [], []);

      this.tweets.push(tweet1);
      this.tweets.push(tweet2);
      this.tweets.push(tweet3);
      this.tweets.push(tweet4);
    }
  }

  public getTweets(): Tweet[]
  {
    let list_tweets: Tweet[] = [];

    this.tweets.forEach(
      tweet => {
        list_tweets.push(tweet)
      });
    return list_tweets;
  }

  public publishTweet(tweet: Tweet)
  {
    //obtiene el ultimo elemento de la pila
    //y lo devuelve como primer elemento
    this.tweets.unshift(tweet);
    
    //Emito y/o notifico el evento que tengo nuevos tweets
    this.newTweets$.next(true);
  }
}
