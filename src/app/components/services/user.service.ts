import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "src/app/models/User";

@Injectable({ providedIn: 'root' })
export default class UserService{

    constructor(){
        this.loadUser();
    }
    get user() { return this.currentUser.value; }
  private readonly currentUser = new BehaviorSubject<User>(null);

    saveUser(user: any){
        if(!this.user){
            localStorage.setItem('user', JSON.stringify(user));
        }
    }
    loadUser(){
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            this.currentUser.next(user);
        }
    }

}
