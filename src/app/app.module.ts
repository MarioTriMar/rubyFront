import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotesManagementComponent } from './notes-management/notes-management.component';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { NoteCreationComponent } from './note-creation/note-creation.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { UsersFriendshipComponent } from './users-friendship/users-friendship.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesManagementComponent,
    HeadNavComponent,
    NoteCreationComponent,
    RegisterComponent,
    SidebarComponent,
    UsersManagementComponent,
    UsersFriendshipComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
