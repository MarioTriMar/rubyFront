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

  ngOnInit(): void {
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
    },error=>{
      console.log(error)
    })
  }

  //boton arriba del navegador
  addNote(){
    this.router.navigate(['/addNoteToCollection'])
  }
}
