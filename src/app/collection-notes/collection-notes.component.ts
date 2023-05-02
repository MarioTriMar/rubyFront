import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-notes',
  templateUrl: './collection-notes.component.html',
  styleUrls: ['./collection-notes.component.css']
})
export class CollectionNotesComponent implements OnInit {
  notes:Note[];
  constructor(private noteService:NoteService, private router:Router) { }

  //Este componente carga todas las notas de la coleccion
  ngOnInit(): void {
    if(!localStorage.getItem("idUser")){
      window.location.href = "home";
    }
    this.loadNotes()
  }
  loadNotes(){
    this.noteService.getNotesOfCollection(localStorage.getItem("collectionId")!).subscribe(data=>{
      this.notes=data
    },error=>{
      console.log(error)
    })
  }

  //Boton en cada nota que se liste
  deleteNoteOfCollection(note:Note){
    this.noteService.deleteNoteOfCollection(note._id.$oid, localStorage.getItem("collectionId")!).subscribe(data=>{
      console.log(data)
      this.ngOnInit();
    },error=>{
      console.log(error)
    })
  }

  //boton arriba del navegador
  addNote(){
    this.router.navigate(['/addNoteToCollection'])
  }
}
