import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BeckyComponent } from './becky/becky.component';
import { MyViewComponent } from './my-view/my-view.component';


@NgModule({
  declarations: [
    AppComponent,
    BeckyComponent,
    MyViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
