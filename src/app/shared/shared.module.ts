import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { StatusColorDirective } from './directives/status-color.directive';
import { BooleanPipe } from './pipes/boolean.pipe';
import { MyServiceService } from './services/my-service.service';

@NgModule({
  declarations: [
    // declaramos elementos del modulo Componentes, Pipes y Directivas
    HeaderComponent,
    BooleanPipe,
    StatusColorDirective,
  ],
  imports: [
    CommonModule,

  ],
  providers: [
    // declaramos servicios propios del modulo
    BooleanPipe,
    MyServiceService,
  ],
  exports: [
    // declaramos elementos publicos
    HeaderComponent,
    BooleanPipe,
    StatusColorDirective,
  ]
})
export class SharedModule {
}
