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

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      if (reader.result != null) {
        const base64String = reader.result.toString();
        this.user.image = base64String;
      }

    };
  }
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.state=true
    this.loadUser()
  }
  clear(){
    
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
      this.user.password=""
      this.user.password2=""
      this.user.image = this.decodedImage(this.user.image);
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
    const passwordCloseButton = document.getElementById('passwordClose');
        if (passwordCloseButton) {
            passwordCloseButton.click();
}
  }
  decodedImage(image: string) {
    let decodedString = atob(image);
    let byteCharacters = decodedString.split('').map(char => char.charCodeAt(0));
    let byteArray = new Uint8Array(byteCharacters);
    let blob = new Blob([byteArray], { type: 'image/png' }); // replace with the actual image format
    let url = URL.createObjectURL(blob);
    console.log(url);
    return url

  }
}
