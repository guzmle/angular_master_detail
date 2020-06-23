import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule(
  {
    declarations: [
      // all the components and views that belong to the module must be declared here
      AppComponent,
    ],
    imports: [
      // all external modules that are dependencies are declared here
      BrowserModule,
      AppRoutingModule,
      SharedModule,
    ],
    providers: [
      // all application services
      DatePipe
    ],
    bootstrap: [AppComponent]
  }
)
// This is the principal module
export class AppModule {
}
