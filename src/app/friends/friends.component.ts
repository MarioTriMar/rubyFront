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
  friends: any[];
  constructor(private usersService:UserService, private router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("idUser")){
      window.location.href = "home";
    }
    this.getAllFriends()
  }
  getAllFriends(){
    this.usersService.getAllFriends(localStorage.getItem("idUser")!).subscribe(data=>{
      console.log(data)
      this.friends=data
    },error =>{
      console.log(error)
    })
  }
  userProfile(friend:any) {
    this.usersService.getHasFriendshipRequest(localStorage.getItem("idUser")!,friend.user._id.$oid).subscribe(data=>{
      localStorage.setItem("profileType", data.message)
      localStorage.setItem("userProfile", friend.user._id.$oid)
      localStorage.setItem("idFriendship",friend.idRequest)
      this.router.navigate(["/userProfile"])
    },error=>{
      console.log(error)
    })
    
  }
}
