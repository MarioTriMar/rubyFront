import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  

  private baseURL = "http://localhost:3000/api/"
  constructor(private httpClient:HttpClient) { }

  getAllNotes(){
    return this.httpClient.get<Note[]>(this.baseURL+"get_allNotes");
  }
  deleteNote(id:any){
    console.log(id.$oid)
    return this.httpClient.delete(this.baseURL+"delete_note?_id=" +id.$oid
    )
  }
  saveNote(note:Note):Observable<any>{
    return this.httpClient.post(this.baseURL+"add_note",note)
  }
  getNoteById(id: string) {
    console.log(id)
    return this.httpClient.get<Note>(this.baseURL+"get_noteById?_id="+id);
  }
  updateNote(note: Note):Observable<any> {
    console.log(note._id.$oid)
    return this.httpClient.put(this.baseURL+"update_note?_id="+note._id.$oid, note)
  }
  
}
