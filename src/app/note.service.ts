import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';
import { Observable } from 'rxjs';
import { SharedNote } from './shared-note';
import { Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseURL = "http://192.168.18.108:3000/api/"
  constructor(private httpClient: HttpClient) { }
  getAllNotesByUserId(idUser: string) {
    console.log(this.baseURL + "get_allNotesByUserId?idUser=" + idUser)
    return this.httpClient.get<Note[]>(this.baseURL + "get_allNotesByUserId?idUser=" + idUser);
  }

  getAllNotes() {
    return this.httpClient.get<Note[]>(this.baseURL + "get_allNotes");
  }
  deleteNote(note: Note) {
    console.log(note._id.$oid)
    return this.httpClient.delete(this.baseURL + "delete_note?_id=" + note._id.$oid
    )
  }
  saveImage(formData: FormData): Observable<any> {
    return this.httpClient.post(this.baseURL + "save_image", formData)
  }
  saveNote(note: Note): Observable<any> {
    return this.httpClient.post(this.baseURL + "add_note", note)
  }
  getNoteById(id: string) {
    console.log(id)
    return this.httpClient.get<Note>(this.baseURL + "get_noteById?_id=" + id);
  }
  updateNote(note: Note): Observable<any> {
    console.log(note._id.$oid)
    return this.httpClient.put(this.baseURL + "update_note?_id=" + note._id.$oid, note)
  }
  shareNote(sharedNote: SharedNote): Observable<any> {
    console.log("llega")
    return this.httpClient.post(this.baseURL + "create_noteRequest", sharedNote)
  }
  getAllNoteRequests(userId: string) {
    return this.httpClient.get<any>(this.baseURL + "get_sharedNoteRequests?userId=" + userId);
  }
  acceptRequest(requestId: string) {
    return this.httpClient.put(this.baseURL + "accept_noteRequest?requestId=" + requestId, null)
  }
  rejectRequest(requestId: string) {
    return this.httpClient.delete(this.baseURL + "reject_noteRequest?requestId=" + requestId)
  }

}
