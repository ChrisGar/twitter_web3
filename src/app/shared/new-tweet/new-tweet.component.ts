import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tweet } from '../model/tweet';
import { TweetService } from '../tweetService/tweet.service';

@Component({
  selector: 'new-tweet',
  templateUrl: './new-tweet.component.html',
  styleUrls: ['./new-tweet.component.scss']
})
export class NewTweetComponent {

  //objeto formulario que se usara en el html (two-way data-binding)
  public form: FormGroup;

  public constructor(public formBuilder: FormBuilder, public tweetService: TweetService){

    //instanciamos el formulario alimentandolo 
    //de lo que tengo dentro del formulario html
    this.form = formBuilder.group({
      
      //formControlName="tweet_content" dentro del html
      //definimos que va a tener un valor nulo
      //y que el valor maximo de caracteres es 140
      tweetcontent: [null, 
        [
          Validators.required,
          Validators.max(140)]
      ]
    })

  }

  public submit()
  {
    //validamos si el formulario es valido
    //valida los parametros puestos en el constructor en tweetcontent:
    if(this.form.valid)
    {
      //Obtengo el valor del campo tweetcontent dentro del formulario
      let tweetcontent = this.form.get('tweetcontent')?.value;
      let tweet = new Tweet(new Date, tweetcontent, "Pedro", 65, [], [], [])
      
      this.tweetService.publishTweet(tweet);
    }
  }

}
