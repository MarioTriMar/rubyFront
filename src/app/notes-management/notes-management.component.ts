import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
@Component({
  selector: 'app-notes-management',
  templateUrl: './notes-management.component.html',
  styleUrls: ['./notes-management.component.css']
})
export class NotesManagementComponent implements OnInit {

  notes: Note[];

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getAllNotes()
  }

  getAllNotes(){
    this.noteService.getAllNotes().subscribe(data=>{
      console.log(data)
      this.notes=data
    },error =>{
      console.log(error)
    })
  }
}
