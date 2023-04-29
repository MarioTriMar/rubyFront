import { Component, OnInit } from '@angular/core';
import { Friendship } from '../friendship';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendships-requests',
  templateUrl: './friendships-requests.component.html',
  styleUrls: ['./friendships-requests.component.css']
})
export class FriendshipsRequestsComponent implements OnInit {
  user:User;
  friends: User[];
  friendshipsRequests: any[]
  constructor(private usersService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.loadFriendshipRequests()
    localStorage.setItem("profileType", "")
  }
  loadFriendshipRequests(){
    console.log(localStorage.getItem("idUser")!)
    this.usersService.getFriendshipsRequestByUserId(localStorage.getItem("idUser")!).subscribe(data=>{
      this.friendshipsRequests=data
      for (let i = 0 ; i < this.friendshipsRequests.length; i++){
        this.usersService.getUserById(this.friendshipsRequests[i].userA).subscribe(data=>{
          this.user = data;
          this.friends.push(this.user);
        }, error=>{
          console.log(error)
        })
      }

    }, error=>{
      console.log(error)
    })
  }
  profile(requests:any) {
    localStorage.setItem("requestId", requests._id.$oid)
    localStorage.setItem("userProfile", requests.userA)
    localStorage.setItem("profileType", "applicant")
    this.router.navigate(["/userProfile"])
  }
  reject(requests:any) {
    this.usersService.rejectFrienshipRequest(requests._id.$oid).subscribe(data=>{
      alert("Request declined")
    },error=>{
      console.log(error)
    })
    this.router.navigate(["/friendshipsRequests"])
    
  }
  accept(requests:any) {
    this.usersService.acceptFrienshipRequest(requests._id.$oid).subscribe(data=>{
      alert(requests.userB+" and you are friends now")
    },error=>{
      console.log(error)
    })
    this.router.navigate(["/friendshipsRequests"])

  }
}
