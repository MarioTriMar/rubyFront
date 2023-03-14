import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesManagementComponent } from './notes-management/notes-management.component';

const routes: Routes = [
  {path : 'noteManagement',component:NotesManagementComponent},
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path : 'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
