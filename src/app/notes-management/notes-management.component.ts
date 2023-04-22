import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-management',
  templateUrl: './notes-management.component.html',
  styleUrls: ['./notes-management.component.css']
})

export class NotesManagementComponent implements OnInit {
  tipoUsuario = localStorage.getItem('tokenSessionTipo')!; //Esta variable contiene el tipo de usuario logeado y segun lo que contenga le mostrara distintas opciones de funcionalidad en la sidebar
  isadmin: boolean;
  notes: Note[];
  
  constructor(private noteService:NoteService, private router: Router) { }

  ngOnInit(): void {
    if (this.tipoUsuario=="user"){
      this.getAllNotesByUserId()
    }else{
      this.isadmin=true
      this.getAllNotes()
    }
      
  }
  getAllNotesByUserId(){
    this.noteService.getAllNotesByUserId(localStorage.getItem("username")!).subscribe(data=>{
      console.log(data)
      this.notes=data
    },error =>{
      console.log(error)
    })
  }
  getAllNotes(){
    this.noteService.getAllNotes().subscribe(data=>{
      console.log(data)
      this.notes=data
    },error =>{
      console.log(error)
    })
  }
  deleteNote(note:Note){
    this.noteService.deleteNote(note._id).subscribe(data=>{
      alert("Borrado")
      this.getAllNotes()
    },error=>{
      console.log(error)
    })
    
  }
  show(){
    alert("esta")
  }
  createNote() {
    sessionStorage.setItem("type", "Creation")
    this.router.navigate(['/noteCreation'])
  }
  showNote(note:Note){
    sessionStorage.setItem("type", "Update")
    sessionStorage.setItem("idNote", note._id.$oid)
    this.router.navigate(['/noteCreation'])
  }
}