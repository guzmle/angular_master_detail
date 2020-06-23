import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { BooleanPipe } from '../../../shared/pipes/boolean.pipe';
import { MyServiceService } from '../../../shared/services/my-service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  isVisible = true;
  identifier = 'listLeo';
  list = [];

  private obj = {
    name: 'leo',
    surname: 'guzman',
    id: 1,
  };

  constructor(private booleanPipe: BooleanPipe,
              private datePipe: DatePipe,
              private myService: MyServiceService,
              private router: Router,
              private apiService: ApiService) {
  }

  ngOnInit(): void {

    this.list = this.apiService.getList();
    this.myService.print();
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

  goToDetalle(item) {
    // Acceso al set detalle desde una funcion
    this.myService.setDetalle(item);

    // Acceso al set detalle desde set de typescripts
    this.myService.detalle2 = item;

    this.router.navigate(['/items/detalle']);
  }
}
