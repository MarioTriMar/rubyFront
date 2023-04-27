import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Collection } from '../collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-management',
  templateUrl: './collection-management.component.html',
  styleUrls: ['./collection-management.component.css']
})
export class CollectionManagementComponent implements OnInit {
  collections: Collection[];
  note: Collection = new Collection();
  name:string;
  constructor(private noteService:NoteService,private router:Router) { }

  ngOnInit(): void {
  }
  getCollections(){
    this.noteService.getCollectionsOfUser(localStorage.getItem("idUser")!).subscribe(data=>{
      this.collections=data
      console.log(this.collections)
    },error=>{
      console.log(error)
    })
  }
  createCollection(){
    this.noteService.createCollection(this.name, localStorage.getItem("idUser")!).subscribe(data=>{
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
}
