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
    this.noteService.getAllNotesByUserId(localStorage.getItem("idUser")!).subscribe(data=>{
      this.notes=data
      this.loadSharedNotes();
    },error=>{
      console.log(error)
    })
  }
  loadCollectionNotes(){
    this.noteService.getNotesOfCollection(localStorage.getItem("collectionId")!).subscribe(data=>{
      this.collectionNotes=data
      this.checkNotesOfCollection();
    },error=>{
      console.log(error)
    })
  }


  loadSharedNotes(){
    this.noteService.getAllSharedNotesByUserId(localStorage.getItem("idUser")!).subscribe(data=>{
      this.sharedNotes=data
      this.loadCollectionNotes();
    },error=>{
      console.log(error)
    })
  }
  checkNotesOfCollection(){
    this.allNotes=this.notes.concat(this.sharedNotes);
    console.log(this.allNotes);
    for (let i = 0 ; i < this.collectionNotes.length ; i++){
      for (let j = 0 ; j < this.allNotes.length; i++){
        if (this.collectionNotes[i]._id.$oid == this.allNotes[j]._id.$oid){
          this.allNotes.splice(j,1);
        }
      }
    }
    console.log(this.notes);
  }
  //cuando hagas click en una nota se ejecuta este metodo
  selectNote(note:Note){
    this.selectedNote=note
  }

  //metodo que ejecuta el boton que estará arriba para añadir nota
  //a este boton como etiqueta se le puede poner el {{selectedNote.title}}
  addNote(){
    this.noteService.addNoteToCollection(localStorage.getItem("collectionId")!,this.selectedNote._id.$oid).subscribe(data=>{
      console.log(data)
    },error=>{
      console.log(error)
    })
  }



}
