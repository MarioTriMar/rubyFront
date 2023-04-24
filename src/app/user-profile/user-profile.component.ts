import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { Friendship } from '../friendship';
import { end } from '@popperjs/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User = new User();
  friendship:Friendship=new Friendship();
  requestId:string;
  hasRequested:boolean;
  areFriends:boolean;
  constructor(private usersService:UserService, private noteService:NoteService, private router:Router) { }
  notes: Note[];
  ngOnInit(): void {
    this.loadUser()
    console.log(localStorage.getItem("profileType"))
    if (localStorage.getItem("profileType")=="applicant"){
      //si me ha enviado la solicitud
      this.hasRequested=true
      this.areFriends=false
    }else if(localStorage.getItem("profileType")=="friends"){
      //si ya somos amigos
      this.hasRequested=false
      this.areFriends=true
    }else if(localStorage.getItem("profileType")=="alreadySent"){
      //si he enviado yo la solicitud
      this.hasRequested=true
      this.areFriends=true
    }else{
      this.hasRequested=false
      this.areFriends=false
    }
    
  }
  
  loadUser(){
    
    this.usersService.getUserById(localStorage.getItem("userProfile")!).subscribe(data=>{
      
      this.user=data

      this.friendship.userA=localStorage.getItem("idUser")!
      this.friendship.userB=this.user._id.$oid
      this.friendship.state=false
      if(localStorage.getItem("profileType")=="applicant"){
        this.getRequest(localStorage.getItem("idUser")!,this.user._id.$oid)
      }
      
      this.getAllNotesByUserId(this.user.username)
    },error =>{
      console.log(error)
    })
    
  }
  getAllNotesByUserId(username:string){
    this.noteService.getAllNotesByUserId(username).subscribe(data=>{
      this.notes=data
    },error =>{
      console.log(error)
    })
  }
  sendFriendshipRequest(){
    this.usersService.createFriendshipRequest(this.friendship).subscribe(data=>{
      console.log(data)
      alert("Request sent")
      this.router.navigate(['/usersFriendship'])
    },error=>{
      console.log(error)
    })
    
  }
  getRequest(userA: string, userB: any) {
    this.usersService.getFriendshipRequestOfUsers(userA,userB).subscribe(data=>{
      this.requestId=data[0]._id.$oid
      console.log(this.requestId)
    },error=>{
      console.log(error)
    })
  }
  reject() {
    this.usersService.rejectFrienshipRequest(this.requestId).subscribe(data=>{
      alert("Request declined")
      this.router.navigate(["/friendshipsRequests"])
    },error=>{
      console.log(error)
    })
    localStorage.setItem("profileType","")
    
    
  }
  accept() {
    console.log(this.requestId)
    this.usersService.acceptFrienshipRequest(this.requestId).subscribe(data=>{
      alert(this.user.username+" and you are friends now")
      this.router.navigate(["/friendshipsRequests"])
    },error=>{
      console.log(error)
    })
    localStorage.setItem("profileType","")
    

  }
}
