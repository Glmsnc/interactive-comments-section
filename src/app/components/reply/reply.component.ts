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
  user: any;
  constructor(readonly userService: UserService) { }

  ngOnInit(): void {
    if(this.replyTo) this.textContent = `@${this.replyTo},`;
    this.loadUserInfo();
  }

  send(){
    let replyingTo = '' 
    if(this.replyTo){
      this.textContent = this.textContent.split('@')[1];
      if(this.textContent?.includes(',')){
        replyingTo = this.textContent.split(',')[0];
        this.textContent = this.textContent.split(',')[1];
      }
      else{
        replyingTo = this.textContent.split(' ')[0];
        this.textContent = this.textContent.split(' ')[1];
      }
    this.sendMessage.emit({replyingTo, content:this.textContent});
    }
    else{
      this.sendMessage.emit(this.textContent);
    }
    this.textContent = '';

  }


  loadUserInfo(){
    this.userService.user$.subscribe(user => this.user = user);
  }
  changeText(){
    if(!this.textContent.includes('@')) this.close.emit();
  }
}
