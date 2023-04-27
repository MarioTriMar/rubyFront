import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-friendships',
  templateUrl: './admin-friendships.component.html',
  styleUrls: ['./admin-friendships.component.css']
})
export class AdminFriendshipsComponent implements OnInit {
  friendships:any[];
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem("tokenSessionTipo")!="admin"){
      this.router.navigate(['/home'])
    }else{
      this.loadFriendships()
    }
  }

  /*
  el friendships:Any es un json que tiene las siguiente claves:
  {
    "idRequest" que es el id de la relación
    "userA" que es el nombre del userA
    "userB" que es el nombre del userB
  }
  */
  loadFriendships(){
    this.userService.getAllFriendships().subscribe(data=>{
      this.friendships=data
    },error=>{
      console.log(error)
    })
  }
  /*
  Este metodo lo ejecutará un boton que estará en cada card
  Si en el html poneis en el  ngFor *ngFor="let friendship of friendships"
  cuando pongais el (click) pasadle al deleteFriendship(shared.idRequest)
  */
  deleteFriendship(idRequest:any){
    this.userService.deleteFriendship(idRequest.$oid).subscribe(data=>{
      console.log(data)
      alert("Friendship deleted")
      
    },error=>{
      console.log(error)
    })
  }

}
