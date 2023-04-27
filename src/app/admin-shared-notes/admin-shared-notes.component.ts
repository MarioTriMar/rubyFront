import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-admin-shared-notes',
  templateUrl: './admin-shared-notes.component.html',
  styleUrls: ['./admin-shared-notes.component.css']
})
export class AdminSharedNotesComponent implements OnInit {

  sharedNotes:any[]
  constructor(private router:Router, private noteService:NoteService) { }

  ngOnInit(): void {
    if(localStorage.getItem("tokenSessionTipo")!="admin"){
      this.router.navigate(['/home'])
    }else{
      this.loadSharedNotes()
    }
  }
  /*
  sharedNotes es un array de json que tiene el siguiente formato
  {
    "idShared":{
      "$oid": id de la sharedNote
    },
    "note":{
      "_id":{
        "$oid":id de la nota compartida
      },
      "created_at"...
      "image"...
      todos los datos de una nota
    },
    "user": nombre del usuario al que le han compartido la nota
  }

  por ejemplo, para acceder a el titulo de la nota y ponerlo en el card será {{shared.note.title}}
  si usais este *ngFor="let shared of sharedNotes"
  */
  loadSharedNotes(){
    this.noteService.getAllSharedNotes().subscribe(data=>{
      this.sharedNotes=data
    },error=>{
      console.log(error)
    })
  }
  /*
  Este metodo lo ejecutará un boton que estará en cada card
  Si en el html poneis en el  ngFor *ngFor="let shared of sharedNotes"
  cuando pongais el (click) pasadle al deleteSharedNote(shared.idShared)
  */
  deleteSharedNote(idShared:any){
    this.noteService.rejectRequest(idShared.$oid).subscribe(data=>{
      console.log(data)
      alert("Shared note deleted")
    },error=>{
      console.log(error)
    })
  }
  

}
