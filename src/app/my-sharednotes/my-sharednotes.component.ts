import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-my-sharednotes',
  templateUrl: './my-sharednotes.component.html',
  styleUrls: ['./my-sharednotes.component.css']
})
export class MySharednotesComponent implements OnInit {
  tipoUsuario = localStorage.getItem('tokenSessionTipo')!; //Esta variable contiene el tipo de usuario logeado y segun lo que contenga le mostrara distintas opciones de funcionalidad en la sidebar
  isadmin: boolean;
  notes: Note[];
  note: Note = new Note();
  url: string;
  constructor(private router:Router, private noteService:NoteService) { }

  ngOnInit(): void {
    this.getAllSharedNotes()
  }
  getAllSharedNotes() {
    this.noteService.getAllSharedNotesByUserId(localStorage.getItem("idUser")!).subscribe(data=>{
      this.notes=data
    },error=>{
      console.log(error)
    })
  }
  showNote(note: Note) {
    sessionStorage.setItem("type", "Shared")

    sessionStorage.setItem("idNote", note._id.$oid)
    this.router.navigate(['/noteCreation'])
  }
}
