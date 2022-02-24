import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ButtonReply } from './components/shared/buttons/reply/button-reply.component';
import { ButtonPlus } from './components/shared/buttons/plus/button-plus.component';
import { ButtonMinus } from './components/shared/buttons/minus/button-minus.component';
import { ReplyComponent } from './components/reply/reply.component';
import { ReplyListComponent } from './components/reply-list/reply-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogDeleteComponent } from './components/shared/dialog-delete/dialog-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    ReplyComponent,
    ButtonPlus,
    ButtonMinus,
    ButtonReply,
    ReplyListComponent,
    CommentListComponent,
    DialogDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
