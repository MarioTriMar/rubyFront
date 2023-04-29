import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notes-management',
  templateUrl: './notes-management.component.html',
  styleUrls: ['./notes-management.component.css']
})

export class NotesManagementComponent implements OnInit {
  tipoUsuario = localStorage.getItem('tokenSessionTipo')!; //Esta variable contiene el tipo de usuario logeado y segun lo que contenga le mostrara distintas opciones de funcionalidad en la sidebar
  isadmin: boolean;
  notes: Note[];
  note: Note = new Note();
  url: string;
  selectedFile: File

  constructor(private noteService: NoteService, private router: Router) { }
  ngOnInit(): void {
    if (this.tipoUsuario == "user") {
      this.getAllNotesByUserId()
    } else {
      this.isadmin = true
      this.getAllNotes()
    }
    this.assingImage();
  }

  assingImage() {
    for (let i = 0; i < this.notes.length; i++) {
      this.notes[i].image = this.decodedImage(this.notes[i].image);
    }
  }

  getAllNotesByUserId() {
    this.noteService.getAllNotesByUserId(localStorage.getItem("username")!).subscribe(data => {
      console.log(data)
      this.notes = data
    }, error => {
      console.log(error)
    })
  }
  getAllNotes() {
    this.noteService.getAllNotes().subscribe(data => {
      console.log(data)
      this.notes = data
    }, error => {
      console.log(error)
    })
  }
  deleteNote(note: Note) {
    this.noteService.deleteNote(note).subscribe(data => {
      alert("Borrado")
      if (this.tipoUsuario == "user"){
        this.getAllNotesByUserId()
      }else{
        this.getAllNotes()
      }
      
    }, error => {
      console.log(error)
    })

  }
  shareNote(note: Note) {
    console.log("click")
    localStorage.setItem("idNote", note._id.$oid)
    this.router.navigate(['/shareNote'])
  }
  createNote() {
    sessionStorage.setItem("type", "Creation")
    this.router.navigate(['/noteCreation'])
  }
  showNote(note: Note) {
    sessionStorage.setItem("type", "Update")
    sessionStorage.setItem("idNote", note._id.$oid)
    this.router.navigate(['/noteCreation'])
  }
  decodedImage(image: string) {
    let decodedString = atob(image);
    let byteCharacters = decodedString.split('').map(char => char.charCodeAt(0));
    let byteArray = new Uint8Array(byteCharacters);
    let blob = new Blob([byteArray], { type: 'image/png' }); // replace with the actual image format
    let url = URL.createObjectURL(blob);
    console.log(url);
    return url

  }

}