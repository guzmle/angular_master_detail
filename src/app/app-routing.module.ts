import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ListaComponent,
  },
  {
    path: 'detalle',
    component: DetalleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// This is the routing module
export class AppRoutingModule {
}
