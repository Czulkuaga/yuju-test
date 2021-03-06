import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './application/shared/service/data.service';
import { Error404Component } from './error404/error404.component';
import { InitComponent } from './init/init.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    InitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
