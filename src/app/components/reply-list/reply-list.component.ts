import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.less']
})
export class ReplyListComponent implements OnInit {

  @Input() replies: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
