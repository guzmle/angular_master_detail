import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  @Input() title: string;
  @Output() returnClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickReturn() {
    this.returnClick.emit();
  }

}
