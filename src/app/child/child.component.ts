import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  public currentUser;

  @Output()
  public change1 = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.change1.emit(1);
  }

}
