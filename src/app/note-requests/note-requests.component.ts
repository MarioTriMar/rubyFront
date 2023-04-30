import { Component, OnInit } from '@angular/core';
import { SharedNote } from '../shared-note';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-note-requests',
  templateUrl: './note-requests.component.html',
  styleUrls: ['./note-requests.component.css']
})
export class NoteRequestsComponent implements OnInit {
  noteRequests:any[]
  constructor(private noteService:NoteService, private router:Router) { }

  ngOnInit(): void {
    this.getRequests()
  }
  getRequests(){
    this.noteService.getAllNoteRequests(localStorage.getItem("username")!).subscribe(data=>{
      this.noteRequests=(data)
    },error=>{
      console.log(error)
    })
  }
  seeNote(note:any){
    sessionStorage.setItem("type", "Review")
    sessionStorage.setItem("idNote", note._id.$oid)
    
    this.router.navigate(['/noteCreation'])
  }
  acceptRequest(request:any){
    
    console.log(request)
    this.noteService.acceptRequest(request.request._id.$oid).subscribe(data=>{
      alert("Note accepted")
      this.router.navigate(['/noteRequests'])
    },error=>{
      console.log(error)
    })
    
  }
  rejectRequest(request:any){
    
    
    this.noteService.rejectRequest(request.request._id.$oid).subscribe(data=>{
      alert("Note rejected")
      this.router.navigate(['/noteRequests'])
    },error=>{
      console.log(error)
    })
    
  }
}
