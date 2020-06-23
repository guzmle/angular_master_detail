import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then((m) => m.ItemsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// This is the routing module
export class AppRoutingModule {
}
