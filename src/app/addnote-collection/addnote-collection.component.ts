import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-addnote-collection',
  templateUrl: './addnote-collection.component.html',
  styleUrls: ['./addnote-collection.component.css']
})
export class AddnoteCollectionComponent implements OnInit {

  notes:Note[];
  selectedNote:Note;
  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.loadNotes()
  }

  loadNotes(){
    this.noteService.getAllNotesByUserId(localStorage.getItem("idUser")!).subscribe(data=>{
      this.notes=data
    },error=>{
      console.log(error)
    })
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
