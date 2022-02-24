import { Component, OnInit } from '@angular/core';
import CommentService from './components/services/comment.service';
import UserService from './components/services/user.service';
import * as data from './data.json';
import { CommentData } from './models/Comment';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  currentUser: User = null;
  comments: CommentData[] = [];
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService){
    this.loadData();
    this.saveUser();
  }

  ngOnInit(): void {
    this.commentService.comment$.subscribe
    (comments => {
      this.comments = comments;
      console.log('teste', this.comments)
    });
  }

  loadData(){
    const {comments, currentUser} = data;
    this.currentUser = currentUser;
    this.saveUser();
    this.saveComments(comments);

  }

  saveUser(){
    this.userService.saveUser(this.currentUser);
  }
  saveComments(comments: any){
    this.commentService.saveComments(comments);
  }
}
