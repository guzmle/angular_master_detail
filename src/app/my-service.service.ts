import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  private _detalle = null;
  private _detalle2 = null;

  constructor() {
    console.log('Inicializado el servicio');
  }

  public print() {
    console.log('print servicio');
  }

  public setDetalle(item) {
    this._detalle = item;
  }

  public getDetalle() {
    return this._detalle;
  }

  public get detalle2() {
    return this._detalle2;
  }

  public set detalle2(detalle2) {
    this._detalle2 = detalle2;
  }
}
