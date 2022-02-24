import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import UserService from '../services/user.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.less']
})
export class ReplyComponent implements OnInit {

  textContent: any;
  @Input() replyTo = '';
  @Input() isNewMessage = false;
  @Output() close = new EventEmitter();
  @Output() sendMessage = new EventEmitter();
  constructor(readonly userService: UserService) { }

  ngOnInit(): void {
    if(this.replyTo) this.textContent = `@${this.replyTo},`;
  }

  send(){
    let replyingTo = '' 
    this.textContent = this.textContent.split('@')[1];
    if(this.textContent.includes(',')){
      replyingTo = this.textContent.split(',')[0];
      this.textContent = this.textContent.split(',')[1];
    }
    else{
      replyingTo = this.textContent.split(' ')[0];
      this.textContent = this.textContent.split(' ')[1];
    }
    this.sendMessage.emit({replyingTo, content:this.textContent});

  }

  changeText(){
    if(!this.textContent.includes('@')) this.close.emit();
  }
}
