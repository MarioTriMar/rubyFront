import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-friendship',
  templateUrl: './users-friendship.component.html',
  styleUrls: ['./users-friendship.component.css']
})
export class UsersFriendshipComponent implements OnInit {
  username:string;
  users: User[];
  usersContaining:User[];
  state: boolean;
  constructor(private usersService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this.usersService.getAllUsers().subscribe(data=>{
      
      console.log(data)
      this.users=data
    },error =>{
      console.log(error)
    })
  }
  userProfile(user:User) {
    
    localStorage.setItem("userProfile", user._id.$oid)
    this.router.navigate(["/userProfile"])
  }
  searchUser(){
    this.usersService.getUsersContaining(this.username).subscribe(data=>{
      console.log(data)
      this.users=data
    },error =>{
      console.log(error)
    })
    this.state=true
  }
  allUsers(){
    this.getAllUsers()
    this.state=false
  }
 
}
