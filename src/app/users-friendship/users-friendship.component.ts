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
    if(!localStorage.getItem("idUser")){
      window.location.href = "home";
    }
    this.getAllUsers()
  }
  getAllUsers(){
    this.usersService.getAllUsers().subscribe(data=>{
      this.users=data
      let n = 0;
      for (let i = 0; i < this.users.length; i++){
        if (localStorage.getItem("idUser") == this.users[i]._id.$oid){
            n = i;
            break;
        }
      }this.users.splice(n,1);

    },error =>{
      console.log(error)
    })
  }
  userProfile(user:User) {
    this.usersService.getHasFriendshipRequest(localStorage.getItem("idUser")!,user._id.$oid).subscribe(data=>{
      localStorage.setItem("profileType", data.message)
      localStorage.setItem("userProfile", user._id.$oid)
      this.router.navigate(["/userProfile"])
    },error=>{
      console.log(error)
    })
    
  }
  searchUser(){
    this.usersService.getUsersContaining(this.username).subscribe(data=>{
      console.log(data)
      this.users=data
      for (let i = 0; i < this.users.length; i++){
        if (localStorage.getItem("idUser") == this.users[i]._id.$oid){
          this.users.splice(i,1);
          break;
        }
      }

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
