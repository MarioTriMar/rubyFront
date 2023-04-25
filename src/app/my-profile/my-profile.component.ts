import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {


  user:User
  state:boolean
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.state=true
    this.loadUser()
  }
  changePassword() {
    this.state=false
  }
  changeData() {
    this.state=true
  }
  loadUser(){
    this.userService.getUserById(localStorage.getItem("idUser")!).subscribe(data=>{
      this.user=data
      let dataAny:any
      dataAny=data
      this.user.password=dataAny.password_digest
      this.user.password2=dataAny.password_digest
      
      console.log(this.user)
    },error=>{
      console.log(error)
    })
  }
  updateUser() {
    this.userService.updateUser(this.user).subscribe(data=>{
      alert("Profile data changed")
    },error=>{
      console.log(error)
    })
  }
  updatePassword(){
    if(this.user.password==this.user.password2){
      let info={
        "userId":this.user._id.$oid,
        "password":this.user.password,
        "password2":this.user.password2
      }
      this.userService.updatePassword(info).subscribe(data=>{
        console.log(data)
      },error=>{
        console.log(error)
      })
    }else{
      alert("Passwords do not match")
    }
  }
}
