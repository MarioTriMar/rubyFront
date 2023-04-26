import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { read } from '@popperjs/core';

@Component({
  selector: 'app-note-creation',
  templateUrl: './note-creation.component.html',
  styleUrls: ['./note-creation.component.css']
})
export class NoteCreationComponent implements OnInit {
  note: Note = new Note();

  opcionSeleccionado: string;
  verSeleccion: string;
  creation: boolean;
  update: boolean;
  selectedFile: File;
  image: File;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (reader.result != null) {
        const base64String = reader.result.toString();
        this.note.image = base64String;
      }

    };
  }

  constructor(private noteService: NoteService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("type") == "Creation") {
      this.creation = true;
      this.update = false;
      this.note.tag = "Diary"

    } else if (sessionStorage.getItem("type") == "Update") {
      this.creation = false;
      this.update = true;
      this.loadNote(sessionStorage.getItem("idNote")!)
      console.log(this.note)
    } else {
      console.log(sessionStorage.getItem("idNote")!)
      this.creation = false
      this.update = false
      this.loadNote(sessionStorage.getItem("idNote")!)
    }

  }

  loadNote(id: string) {
    this.noteService.getNoteById(id).subscribe(data => {
      this.note = data;
    })
  }

  createNote() {
    let valido = true;
    if (this.note.title == undefined || this.note.title == "") {
      alert("Title is required")
      valido = false
    }
    if (this.note.text == undefined || this.note.text == "") {
      alert("Text is required")
      valido = false
    }
    if (valido) {
      this.note.idUser = localStorage.getItem("username")!
      this.noteService.saveNote(this.note).subscribe(data => {
        this.router.navigate(['/noteManagement']);
      }, (error) => {
        console.log(error);
      })

    }
  }
  saveNote() {

    try {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);

      this.noteService.saveImage(formData).subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.log(error)
        }
      );

      this.noteService.saveNote(this.note).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    } catch (error) {
      console.error(error);

    }


  }

  updateNote() {
    let valido = true;
    if (this.note.title == undefined || this.note.title == "") {
      alert("Title is required")
      valido = false
    }
    if (this.note.text == undefined || this.note.text == "") {
      alert("Text is required")
      valido = false
    }
    if (valido) {
      this.noteService.updateNote(this.note).subscribe(data => {
        this.router.navigate(['/noteManagement']);
      }, (error) => {
        console.log(error);
      })
    }
  }

  deleteNote() {
    console.log(this.note._id.$oid)
    this.noteService.deleteNote(this.note).subscribe(data => {
      this.router.navigate(['/noteManagement']);
    }, (error) => {
      console.log(error);
    })
  }
  shareNote() {
    console.log("click")
    localStorage.setItem("idNote", this.note._id.$oid)
    this.router.navigate(['/shareNote'])
  }

}