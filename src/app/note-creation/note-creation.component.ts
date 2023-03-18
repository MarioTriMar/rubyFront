import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-creation',
  templateUrl: './note-creation.component.html',
  styleUrls: ['./note-creation.component.css']
})
export class NoteCreationComponent implements OnInit {
  note: Note = new Note();
 
  opcionSeleccionado: string;
  verSeleccion: string;

  constructor(private noteService:NoteService, private router:Router) { }

  ngOnInit(): void {
    this.note.tag="Diary"
  }
  createNote(){
    let valido=true;
    if(this.note.title==undefined || this.note.title==""){
      alert("Title is required")
      valido=false
    }
    if(this.note.text==undefined || this.note.text=="") {
      alert("Text is required")
      valido=false
    }
    if(valido){
      this.noteService.saveNote(this.note).subscribe(data=>{
        this.router.navigate(['/noteManagement']);
      }, (error)=>{
        console.log(error);
      })  
    }
  }
}

