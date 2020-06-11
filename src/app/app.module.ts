import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { HeaderComponent } from './header/header.component';
import { StatusColorDirective } from './status-color.directive';
import { BooleanPipe } from './boolean.pipe';

@NgModule(
  {
    declarations: [
      // all the components and views that belong to the module must be declared here
      AppComponent,
      ListaComponent,
      HeaderComponent,
      StatusColorDirective,
      BooleanPipe,
    ],
    imports: [
      // all external modules that are dependencies are declared here
      BrowserModule,
      AppRoutingModule
    ],
    providers: [
      // all application services
      BooleanPipe,
      DatePipe,
    ],
    bootstrap: [AppComponent]
  }
)
// This is the principal module
export class AppModule {
}
