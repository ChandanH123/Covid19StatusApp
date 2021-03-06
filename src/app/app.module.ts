import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatesTableComponent } from './states-table/states-table.component';
import { DistrictsTableComponent } from './districts-table/districts-table.component';
import { Error404Component } from './error404/error404.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatesTableComponent,
    DistrictsTableComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
