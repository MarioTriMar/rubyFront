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
import { FriendshipsRequestsComponent } from './friendships-requests/friendships-requests.component';
import { FriendsComponent } from './friends/friends.component';
import { ShareNoteComponent } from './share-note/share-note.component';
import { NoteRequestsComponent } from './note-requests/note-requests.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CollectionManagementComponent } from './collection-management/collection-management.component';
import { CollectionNotesComponent } from './collection-notes/collection-notes.component';
import { AddnoteCollectionComponent } from './addnote-collection/addnote-collection.component';

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
    UserProfileComponent,
    FriendshipsRequestsComponent,
    FriendsComponent,
    ShareNoteComponent,
    NoteRequestsComponent,
    MyProfileComponent,
    CollectionManagementComponent,
    CollectionNotesComponent,
    AddnoteCollectionComponent
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
