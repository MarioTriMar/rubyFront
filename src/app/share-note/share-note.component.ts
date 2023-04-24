import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { NoteService } from '../note.service';
import { SharedNote } from '../shared-note';

@Component({
  selector: 'app-share-note',
  templateUrl: './share-note.component.html',
  styleUrls: ['./share-note.component.css']
})
export class ShareNoteComponent implements OnInit {
  users: User[];
  state:boolean;
  userSelected:User=new User();
  constructor(private usersService:UserService, private router:Router, private noteService:NoteService) { }
  
  ngOnInit(): void {
    this.state=false
    this.getAllFriends()
  }
  getAllFriends(){
    this.usersService.getAllFriends(localStorage.getItem("idUser")!).subscribe(data=>{
      console.log(data)
      this.users=data
    },error =>{
      console.log(error)
    })
  }
  selectFriend(user:User){
    this.state=true
    this.userSelected=user
  }
  shareNote(){
    let sharedNote:SharedNote = new SharedNote()
    sharedNote.noteId=localStorage.getItem("idNote")!
    sharedNote.userId=this.userSelected._id.$oid
    sharedNote.state=false
    this.noteService.shareNote(sharedNote).subscribe(data=>{
      console.log(data)
      alert("Note request sent")
      this.router.navigate(['/noteManagement'])
    },error=>{
      alert(error.error.message)
    })
  }
}
