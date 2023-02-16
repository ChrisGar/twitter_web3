import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  protected users: User[] = []

  constructor() { 
    let user = new User('@juanPdr','juan pedro','https://pbs.twimg.com/profile_images/1481281375835725825/rZzCEFm3_400x400.jpg',[],[],[])
    this.users.push(user);
  }

  public getUser(id: string): User | null
  {
    let user = this.users.filter(user => user.id === id);

    if(user.length > 0)
      return user[0];
    else 
      return null;
  }
}
