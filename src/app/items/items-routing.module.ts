import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './views/detalle/detalle.component';
import { ItemsComponent } from './views/items/items.component';
import { ListaComponent } from './views/lista/lista.component';


const routes: Routes = [
  {
    path: '',
    component: ItemsComponent,
    children: [
      {
        path: 'lista',
        component: ListaComponent,
      },
      {
        path: 'detalle',
        component: DetalleComponent,
      }
    ]
  }
];

// Routing for child es para modulos aislados que poseen su propio enrutamiento
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// This is the routing module
export class ItemRoutingModule {
}
