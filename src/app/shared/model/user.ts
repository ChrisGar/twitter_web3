import { Tweet } from "./tweet";

export class User{
    
    protected _id: string | undefined;

    //realizamos un setter
    set id(value: any){
        this._id = value;
    }
    //realizamos un getter
    get id(): any {
        return this._id;
    }

    protected _name: string | undefined;

    set name(value: any){
        this._name = value;
    }
    //realizamos un getter
    get name(): any {
        return this._name;
    }

    protected _picture: string | undefined;

    set picture(value: any){
        this._picture = value;
    }
    //realizamos un getter
    get picture(): any {
        return this._picture;
    }

    protected _tweets: Tweet[] | undefined;

    set tweets(value: any){
        this._tweets = value;
    }
    //realizamos un getter
    get tweets(): any {
        return this._tweets;
    }

    protected _followers: User[] | undefined;

    set followers(value: any){
        this._followers = value;
    }
    //realizamos un getter
    get followers(): any {
        return this._followers;
    }

    protected _following: User[] | undefined;

    set following(value: any){
        this._following = value;
    }
    //realizamos un getter
    get following(): any {
        return this._following;
    }

    public constructor(id: string, name: string, picture: string, tweets: Tweet[], followers: User[], following: User[])
    {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.tweets = tweets;
        this.followers = followers;
        this.following = following;
    }

}