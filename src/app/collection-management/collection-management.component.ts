import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Collection } from '../collection';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-collection-management',
  templateUrl: './collection-management.component.html',
  styleUrls: ['./collection-management.component.css']
})
export class CollectionManagementComponent implements OnInit {
  collections: Collection[];
  user:User;
  isAdmin = false
  note: Collection = new Collection();
  collection: Collection = new Collection();
  constructor(private noteService:NoteService, private router:Router) { }

  //Este es el primer componente que se tiene que cargar al hacer click en collections
  ngOnInit(): void {
    if(!localStorage.getItem("idUser")){
      window.location.href = "home";
    }
    if (localStorage.getItem("tokenSessionTipo") == "admin"){
      this.isAdmin = true;
      this.getAllCollections();
    }else{
      this.isAdmin = false;
      this.getCollections();   
    }
    
  }
  getCollections(){
    this.noteService.getCollectionsOfUser(localStorage.getItem("idUser")!).subscribe(data=>{
      this.collections=data
      console.log(this.collections)
    },error=>{
      console.log(error)
    })
  }
  //metodo que se ejecute cuando hagas click en el boton arriba del nav
  createCollection(){
    this.noteService.createCollection(this.collection.name, localStorage.getItem("idUser")!).subscribe(data=>{
      console.log(data)
      this.getCollections()
    },error=>{
      console.log(error)
    })
  }
  loadCollection(collection:Collection){
    localStorage.setItem("collectionId",collection._id.$oid)
    this.router.navigate(['/collection'])
  }
  getAllCollections(){
    this.noteService.getAllCollections().subscribe(data=>{
      console.log(data)
      this.collections = data;
    },error=>{
      console.log(error)
    })
  }

  deleteCollection(collection:Collection){
    this.noteService.deleteCollection(collection._id.$oid).subscribe(data=>{
      console.log(data)
      alert("Borrado")
      this.ngOnInit();
    },error=>{
      console.log(error)
    })
  }
}