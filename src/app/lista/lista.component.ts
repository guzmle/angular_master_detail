import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  isVisible = true;
  identifier = 'listLeo';
  list = [
    {id: '1', name: 'leo', active: true},
    {id: '2', name: 'maria', active: false},
    {id: '3', name: 'marcos', active: true}
  ];

  private obj = {
    name: 'leo',
    surname: 'guzman',
    id: 1,
  };

  constructor() {
  }

  ngOnInit(): void {

    for (let i = 0; i < 10; i++) {
      console.log(i);
    }

    for (const item of this.list) {
      console.log(item);
    }

    for (const item in this.obj) {
      console.log(item);
    }
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }

  changeStatus(item) {
    item.active = !item.active;
  }
}
