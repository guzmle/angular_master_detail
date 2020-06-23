import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public title = 'MI TITULO';

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    console.log('ruta', this.route.snapshot.url);
    console.log('ruta 2', this.router.url);
  }

  subHeaderClick() {
    alert('Presionado');
  }

}
