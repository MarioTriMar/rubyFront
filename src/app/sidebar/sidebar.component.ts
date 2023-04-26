import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  username: string

  tipoUsuario = localStorage.getItem('tokenSessionTipo')!; //Esta variable contiene el tipo de usuario logeado y segun lo que contenga le mostrara distintas opciones de funcionalidad en la sidebar

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")!
  }
  gestionNotas(){
    this.router.navigate(["/noteManagement"])
  }
  gestionUsuarios(){
    this.router.navigate(["/usersManagement"])
  }
  gestionFriends(){
    this.router.navigate([])
  }
  gestionCollections(){
    this.router.navigate([])
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
}
