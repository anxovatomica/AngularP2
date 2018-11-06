import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SushiComponent } from './Sushi/sushi.component';
import { PelisComponent } from './Pelis/pelis.component';
import { Pelis2Component } from './Pelis/pelis2.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SushiComponent,
    PelisComponent,
    Pelis2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
