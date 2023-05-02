import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesManagementComponent } from './notes-management/notes-management.component';
import { NoteCreationComponent } from './note-creation/note-creation.component';  
import { RegisterComponent } from './register/register.component';
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
import { MySharednotesComponent } from './my-sharednotes/my-sharednotes.component';
import { AdminFriendshipsComponent } from './admin-friendships/admin-friendships.component';

const routes: Routes = [
  {path : 'noteManagement',component:NotesManagementComponent},
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path : 'home',component:HomeComponent},
  {path: 'noteCreation',component:NoteCreationComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'usersManagement', component:UsersManagementComponent},
  {path: 'usersFriendship', component:UsersFriendshipComponent},
  {path: 'userProfile', component:UserProfileComponent},
  {path: 'friendshipsRequests', component:FriendshipsRequestsComponent},
  {path: 'friends', component:FriendsComponent},
  {path: 'shareNote', component:ShareNoteComponent},
  {path: 'noteRequests', component:NoteRequestsComponent},
  {path: 'myProfile', component:MyProfileComponent},
  {path: 'collectionManagement', component:CollectionManagementComponent},
  {path: 'collection', component:CollectionNotesComponent},
  {path: 'addNoteToCollection', component:AddnoteCollectionComponent},
  {path: 'mySharedNotes', component:MySharednotesComponent},
  {path: 'adminFriendships', component:AdminFriendshipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
