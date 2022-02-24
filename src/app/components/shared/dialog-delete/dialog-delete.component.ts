import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.less']
})
export class DialogDeleteComponent implements OnInit {

  @Output() cancel = new EventEmitter();
  @Output() confirm = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.cancel.emit();
  }
  delete(){
    this.confirm.emit();
  }
}
