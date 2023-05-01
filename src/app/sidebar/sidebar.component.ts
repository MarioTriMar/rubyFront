import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  username: string

  tipoUsuario = localStorage.getItem('tokenSessionTipo')!; //Esta variable contiene el tipo de usuario logeado y segun lo que contenga le mostrara distintas opciones de funcionalidad en la sidebar

  constructor(private userService: UserService, private router:Router) { }
  user:User;


  ngOnInit(): void {
    if(!localStorage.getItem("idUser")){
      window.location.href = "home";
    }
    this.loadUser();
  }
  gestionNotas(){
    this.router.navigate(["/noteManagement"])
  }
  gestionUsuarios(){
    this.router.navigate(["/usersManagement"])
  }
  gestionFriends(){
    this.router.navigate(["/adminFriendships"])
  }
  gestionCollections(){
    this.router.navigate(["/collectionManagement"])
  }
  usersFriendship() {
    localStorage.setItem("profileType", "")
    this.router.navigate(["/usersFriendship"])
  }
  friendshipRequests() {
    localStorage.setItem("profileType", "")
    this.router.navigate(['/friendshipsRequests'])
  }
  friends(){
    this.router.navigate(['/friends'])
  }
  noteRequest() {
    this.router.navigate(['/noteRequests'])
  }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(["/home"])
  }
  myProfile() {
    this.router.navigate(['/myProfile'])
  }
  loadUser(){
    this.userService.getUserById(localStorage.getItem("idUser")!).subscribe(data=>{
      this.user=data
      this.username = this.user.username;
      this.user.image = this.decodedImage(this.user.image);
    },error=>{
      console.log(error)
    })
  }
  sharedNotes(){
    this.router.navigate(['/mySharedNotes'])
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
