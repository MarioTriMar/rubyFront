import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotesManagementComponent } from './notes-management/notes-management.component';
import { HeadNavComponent } from './head-nav/head-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesManagementComponent,
    HeadNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
