import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CommentData } from "src/app/models/Comment";

import { map } from "rxjs/operators";
@Injectable({ providedIn: 'root' })
export default class CommentService{
    
    get comment$() {  
        return this.comments.asObservable().pipe(
            map(comments => this.saveComments(comments)),
        );
    }   
    get comment() { return this.comments.value}
    private readonly comments = new BehaviorSubject<CommentData[]>(null)
   
    removeComment(id: number){
        
    console.log(id,'init', this.comment)
    const newList = this.comment.filter(item => item.id !== id)
    .map( comment => {
        comment.replies = comment.replies.filter(item => item.id !== id);
        return comment;
    });
    console.log('finish', newList)
    this.comments.next(newList);
    }
 
    sendNewComment(comment: any){
        this.comments.next(comment);
    }
    constructor(){
        this.loadComments();
    }

    saveComments(comments: any){
        console.log('salvando...', comments)
        if(comments){
            localStorage.setItem('comments', JSON.stringify(comments));
        }
        return comments;
    }

    loadComments(){
        const comments = JSON.parse(localStorage.getItem('comments'));
        if(comments){
            this.comments.next(comments);
        }
    }

}
