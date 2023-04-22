import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Friendship } from '../friendship';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User = new User();
  friendship:Friendship=new Friendship();
  
  constructor(private usersService:UserService, private noteService:NoteService, private router:Router) { }
  notes: Note[];
  ngOnInit(): void {
    this.loadUser()
    
    
  }
  loadUser(){
    this.usersService.getUserById(localStorage.getItem("userProfile")!).subscribe(data=>{
      
      this.user=data

      this.friendship.userA=localStorage.getItem("idUser")!
      this.friendship.userB=this.user._id.$oid
      this.friendship.state=false

      this.getAllNotesByUserId(this.user.username)
    },error =>{
      console.log(error)
    })
    
  }
  getAllNotesByUserId(username:string){
    console.log(this.user)
    this.noteService.getAllNotesByUserId(username).subscribe(data=>{
      console.log(data)
      this.notes=data
    },error =>{
      console.log(error)
    })
  }
  sendFriendshipRequest(){
    
    
    console.log(this.friendship)
    
    this.usersService.createFriendshipRequest(this.friendship).subscribe(data=>{
      console.log(data)
    },error=>{
      console.log(error)
    })
    
  }
}
