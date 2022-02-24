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
  }

  ngOnInit(): void {
    
    this.loadData();
    this.saveUser();
    this.commentService.comment$.subscribe
    (comments => {
      if(comments){
        this.comments = comments;
      }
      else{
        this.loadDefault();
      }
    });
  }
  addReply($event){
    const reply: CommentData = {
      id: this.getLastId(),
      content: $event,
      createdAt: 'Today',
      score: 0,
      replyingTo: '' ,
      user: this.userService.user,
      replies: []
    }
    this.comments.push(reply);

  }
  loadData(){
    const {comments, currentUser} = data;
    this.currentUser = currentUser;
    this.saveUser();
    this.saveComments(comments);

  }


  loadDefault(){
    const {comments} = data;
    this.comments = comments as CommentData[];
  }

  getLastId(): number{
    let lastId = 0;
    this.commentService.comment.map(comment =>{
      if(comment.id > lastId) lastId = comment.id;
      comment.replies.map(reply =>{ if(reply.id > lastId) lastId = reply.id});
      return comment;
    })
    return lastId+1;
  }

  saveUser(){
    this.userService.saveUser(this.currentUser);
  }
  saveComments(comments: any){
    this.commentService.saveComments(comments);
  }
}
