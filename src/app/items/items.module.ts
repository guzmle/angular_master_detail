import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ItemRoutingModule } from './items-routing.module';
import { DetalleComponent } from './views/detalle/detalle.component';
import { ListaComponent } from './views/lista/lista.component';
import { ItemsComponent } from './views/items/items.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';

@NgModule({
  declarations: [
    DetalleComponent,
    ListaComponent,
    ItemsComponent,
    SubHeaderComponent,
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedModule,
  ]
})
export class ItemsModule {
}
