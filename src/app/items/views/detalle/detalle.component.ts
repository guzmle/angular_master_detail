import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../../../api.service';
import { MyServiceService } from '../../../shared/services/my-service.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  public myForm: { name: string, isFemale: boolean, birthDate: any } = {
    name: '',
    isFemale: false,
    birthDate: null,
  };

  public form: FormGroup;

  constructor(private router: Router,
              private location: Location,
              private formBuilder: FormBuilder,
              private apiService: ApiService,
              private myService: MyServiceService) {

    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      isFemale: [],
      birthDate: []
    });
  }

  async ngOnInit() {
    const data = await this.apiService.getItem();
    this.form.setValue(data);

    this.myService.print();

    this.form.get('isFemale').valueChanges.subscribe((val) => {
      console.log('valor isFemale reactivo', val);
    });

    console.log('servicio get function', this.myService.getDetalle());
    console.log('servicio get typescript', this.myService.detalle2);
    console.log('item', data);
  }

  public goToBack() {
    this.router.navigate(['/lista']);
  }

  public goToBackLocation() {
    this.location.back();
  }

  public saveData() {
    console.log('form normal', JSON.stringify(this.myForm));
    console.log('form reactivo', JSON.stringify(this.form.value));
  }

  public setIsFemale(val) {
    console.log('valor is female', val);
  }
}
