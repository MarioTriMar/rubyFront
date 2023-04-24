import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  users: User[];
  constructor(private usersService:UserService, private router:Router) { }

  ngOnInit(): void {
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
  userProfile(user:User) {
    this.usersService.getHasFriendshipRequest(localStorage.getItem("idUser")!,user._id.$oid).subscribe(data=>{
      localStorage.setItem("profileType", data.message)
      localStorage.setItem("userProfile", user._id.$oid)
      this.router.navigate(["/userProfile"])
    },error=>{
      console.log(error)
    })
    
  }
}
