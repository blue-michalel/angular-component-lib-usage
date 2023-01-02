import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  CustomButtonModule,
  CustomInputModule,
} from 'angular-component-lib/dist/angular-component-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomButtonModule,
    CustomInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
