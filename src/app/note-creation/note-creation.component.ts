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
  creation:boolean;
  constructor(private noteService:NoteService, private router:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("type")=="Creation"){
      this.creation=true;
      this.note.tag="Diary"
      this.note.idUser="Messi"
    }else if(sessionStorage.getItem("type")=="Update") {
      this.creation=false;
      this.loadNote(sessionStorage.getItem("idNote")!)
      console.log(this.note)
    } 
    
  }

  loadNote(id:string){
    this.noteService.getNoteById(id).subscribe(data=>{
      this.note=data;
    })
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
  updateNote(){
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
      this.noteService.updateNote(this.note).subscribe(data=>{
        this.router.navigate(['/noteManagement']);
      }, (error)=>{
        console.log(error);
      })  
    }
  }

  deleteNote(){
    console.log(this.note._id.$oid)
    this.noteService.deleteNote(this.note).subscribe(data=>{
      this.router.navigate(['/noteManagement']);
    }, (error)=>{
      console.log(error);
    }) 
  }
}

