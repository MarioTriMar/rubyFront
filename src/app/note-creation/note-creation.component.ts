import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Note } from '../note';

@Component({
  selector: 'app-note-creation',
  templateUrl: './note-creation.component.html',
  styleUrls: ['./note-creation.component.css']
})
export class NoteCreationComponent implements OnInit {
  note: Note = new Note();
 
  opcionSeleccionado: string;
  verSeleccion: string;

  constructor() { }

  ngOnInit(): void {
    this.note.tag="Diary"
  }
  createNote(){
    let valido=true
    if(this.note.title==undefined){
      alert("Title is requiered")
      valido=false
    }
    if (this.note.text==undefined) {
      alert("Text is requiered")
      valido=false
    }
    
  }
  
}

