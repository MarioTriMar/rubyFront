import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  tipoUsuario = localStorage.getItem('tokenSessionTipo')!; //Esta variable contiene el tipo de usuario logeado y segun lo que contenga le mostrara distintas opciones de funcionalidad en la sidebar

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gestionNotas(){
    this.router.navigate(["/noteManagement"])
  }
  gestionUsuarios(){
    this.router.navigate(["/usersManagement"])
  }
  usersFriendship() {
    localStorage.setItem("profileType", "")
    this.router.navigate(["/usersFriendship"])
  }
  friendshipRequests() {
    localStorage.setItem("profileType", "")
    this.router.navigate(['/friendshipsRequests'])
  }
}
