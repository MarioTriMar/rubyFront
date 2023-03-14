import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseURL = "http://localhost:3000/api/"
  constructor(private httpClient:HttpClient) { }

  getAllNotes(){
    return this.httpClient.get<Note[]>(this.baseURL+"get_allNotes");
  }
}
