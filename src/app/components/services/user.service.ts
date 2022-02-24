import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "src/app/models/User";

import * as data from '../../data.json';
@Injectable({ providedIn: 'root' })
export default class UserService{

    constructor(){
        this.loadDefaultUser();
        this.loadUser();
    }
    get user() { return this.currentUser.value; }
    get user$() { return this.currentUser.asObservable(); }
  private currentUser =  new BehaviorSubject<User>(null);

    saveUser(user: any){
        if(user){
            console.log('save user', user)
            localStorage.setItem('user', JSON.stringify(user));
        }
    }
    loadUser(){
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            this.currentUser.next(user);
        }else{
            const {currentUser} = data;
            this.currentUser.next(currentUser);
        }
    }

    loadDefaultUser(){
        console.log();
    }

}
