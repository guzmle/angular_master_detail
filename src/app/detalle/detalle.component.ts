import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  providers: [
    MyServiceService,
  ]
})
export class DetalleComponent implements OnInit {

  constructor(private router: Router,
              private location: Location,
              private myService: MyServiceService) {
  }

  ngOnInit(): void {
    this.myService.print();

    console.log('servicio get function', this.myService.getDetalle());
    console.log('servicio get typescript', this.myService.detalle2);
  }

  public goToBack() {
    this.router.navigate(['/lista']);
  }

  public goToBackLocation() {
    this.location.back();
  }
}
