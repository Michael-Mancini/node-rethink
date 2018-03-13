import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatepollComponent } from './createpoll/createpoll.component';
import { AnswerpollComponent } from './answerpoll/answerpoll.component';
import { ViewpollsComponent } from './viewpolls/viewpolls.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatepollComponent,
    AnswerpollComponent,
    ViewpollsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
