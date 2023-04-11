import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesManagementComponent } from './notes-management/notes-management.component';
import { NoteCreationComponent } from './note-creation/note-creation.component';  
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : 'noteManagement',component:NotesManagementComponent},
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path : 'home',component:HomeComponent},
  {path: 'noteCreation',component:NoteCreationComponent},
  {path: 'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
