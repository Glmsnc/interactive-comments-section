import { Component, Input, OnInit } from '@angular/core';
import { CommentData } from 'src/app/models/Comment';
import CommentService from '../services/comment.service';
import UserService from '../services/user.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})
export class CommentsComponent implements OnInit {

  @Input() isReply = false;
  @Input() comment: CommentData;
  constructor(readonly userService: UserService,
    readonly commentService: CommentService) { }

  openModal: boolean = false;
  editComment = false;
  openReply = false;
  isCurrentUser = false;

  ngOnInit(): void {
    this.isCurrentUser = (this.userService.user.username === this.comment.user.username);
  }


  addReply(newReply: any){
    const lastId = this.getLastId();
    const reply = {
      id: lastId,
      content: newReply.content,
      createdAt: 'Today',
      score: 0,
      replyingTo: newReply.replyingTo ,
      user: this.userService.user
    }
    if(!this.isReply){
      this.comment.replies.push(reply)
    }
    else{
      this.commentService.comment.map(
          comment =>{
              if (comment.id == this.getParentId()) comment.replies.push(reply);
          }
      );
    }

    this.commentService.saveComments(this.commentService.comment);
    this.openReply = false;
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


  getParentId(): number{
    let parentId: any;

    parentId = this.commentService.comment.find(item =>{
      let test = item.replies.filter(item => item.id == this.comment.id)
     
      return test.length;
      })?.id;
    return parentId;
  }

  downVote(){
    this.comment.score--;
  }

  upVote(){
    this.comment.score++;
  }

  toggleReply(){
    this.openReply = !this.openReply;
  }
  toggleModal(){
    this.openModal = !this.openModal;
  }

  delete(){
    this.commentService.removeComment(this.comment.id);
    this.openModal = false;
  }

  toggleEdit(){
    this.editComment = !this.editComment;
  }

  edit(){
    this.editComment = true;
  }
}
