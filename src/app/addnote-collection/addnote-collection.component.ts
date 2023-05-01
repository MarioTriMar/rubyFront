import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Collection } from '../collection';

@Component({
  selector: 'app-addnote-collection',
  templateUrl: './addnote-collection.component.html',
  styleUrls: ['./addnote-collection.component.css']
})
export class AddnoteCollectionComponent implements OnInit {
  collectionNotes: Note[];
  notes:Note[];
  sharedNotes:Note[];
  allNotes:Note[];
  selectedNote:Note;
  constructor(private noteService:NoteService) { }
  //componente para añadir nota a la coleccion
  ngOnInit(): void {
    this.loadNotes()
  }

  loadNotes(){
    this.noteService.getAllPossibleNotes(localStorage.getItem("idUser")!, localStorage.getItem("collectionId")!).subscribe(data=>{
      console.log(data)
      this.notes=data;
    },error=>{
      console.log(error)
    })
  }

  //metodo que ejecuta el boton que estará arriba para añadir nota
  //a este boton como etiqueta se le puede poner el {{selectedNote.title}}
  addNote(note:Note){
    this.noteService.addNoteToCollection(localStorage.getItem("collectionId")!,note._id.$oid).subscribe(data=>{
      console.log(data)
      this.ngOnInit();
    },error=>{
      console.log(error)
    })
  }



}
