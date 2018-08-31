import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { NewServerAddComponent } from './new-server-add/new-server-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerElementComponent,
    NewServerAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
