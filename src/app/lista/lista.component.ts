import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BooleanPipe } from '../boolean.pipe';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  isVisible = true;
  identifier = 'listLeo';
  list = [
    {id: '1', name: 'leo', active: true, isFemale: false, birthDate: new Date()},
    {id: '2', name: 'maria', active: false, isFemale: true, birthDate: new Date()},
    {id: '3', name: 'marcos', active: true, isFemale: false, birthDate: new Date()}
  ];

  private obj = {
    name: 'leo',
    surname: 'guzman',
    id: 1,
  };

  constructor(private booleanPipe: BooleanPipe,
              private datePipe: DatePipe) {
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
    item.isFemale = !item.isFemale;
  }

  dateToString(date: Date) {
    console.log('transfome date');
    return this.datePipe.transform(date, 'dd/MM/yyyy HH:mm', 'UTC');
  }

  booleanToString(data: boolean) {
    console.log('boolean function');
    return data ? 'Sí' : 'No';
  }
}
