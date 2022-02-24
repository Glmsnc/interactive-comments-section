import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'reply-list',
  templateUrl: './reply-list.component.html',
  styleUrls: ['./reply-list.component.less'],
  animations: [
    trigger('inOutAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: '0' }), animate('.5s ease-out', style({ opacity: '1' }))]),
      transition(':leave', [style({ opacity: '1' }), animate('.5s ease-out', style({ opacity: '0' }))]),
  ]),
  ]
})
export class ReplyListComponent implements OnInit {

  @Input() replies: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
