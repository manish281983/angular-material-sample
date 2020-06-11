import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  @Input() menuList: any;
  @Output() menuChangeAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  menuAction(page) {
    this.menuChangeAction.emit(page);
  }

}
