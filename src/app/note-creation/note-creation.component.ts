import { Component, OnInit } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-creation',
  templateUrl: './note-creation.component.html',
  styleUrls: ['./note-creation.component.css']
})
export class NoteCreationComponent implements OnInit {
  note: Note = new Note();
  constructor() { }

  ngOnInit(): void {
  }

}
