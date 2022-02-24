import { Component, Input, OnInit } from '@angular/core';
import { CommentData } from 'src/app/models/comment';
import { User } from 'src/app/models/User';

@Component({
  selector: 'comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less']
})
export class CommentListComponent implements OnInit {

  @Input() comments!: CommentData[];
  @Input() currentUser!: User;

  constructor() {
  }
  
  ngOnInit(): void {
    console.log('comment', this.comments)
  }

}
