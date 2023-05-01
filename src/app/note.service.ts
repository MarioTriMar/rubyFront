import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note';
import { Observable } from 'rxjs';
import { SharedNote } from './shared-note';
import { Form } from '@angular/forms';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseURL = "http://192.168.18.109:3000/api/"
  constructor(private httpClient: HttpClient) { }
  getAllNotesByUserId(idUser: string) {
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
  deleteAllNotesByUserId(user: User) {
    return this.httpClient.delete(this.baseURL + "delete_allNotesByUserId?idUser=" + user.username
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
  getCollectionsOfUser(idUser: string) {
    return this.httpClient.get<any>(this.baseURL + "get_collectionsOfUser?idUser=" + idUser);
  }
  createCollection(name: string, idUser: string): Observable<any> {
    let info = {
      "name": name,
      "idUser": idUser
    }
    return this.httpClient.post(this.baseURL + "create_collection", info)
  }
  getNotesOfCollection(collectionId: string) {
    return this.httpClient.get<any>(this.baseURL + "get_notesOfCollection?collectionId=" + collectionId);
  }
  deleteNoteOfCollection(noteId: string, collectionId: string) {
    return this.httpClient.delete(this.baseURL + "reject_noteRequest?collectionId=" + collectionId + "&noteId=" + noteId)
  }
  deleteCollection(collectionId: string) {
    return this.httpClient.delete(this.baseURL + "delete_collection?collectionId=" + collectionId)
  }
  addNoteToCollection(collectionId: string, noteId: string) {
    return this.httpClient.put(this.baseURL + "add_noteToCollection?collectionId=" + collectionId +"&noteId=" + noteId ,null)
  }
  getAllSharedNotes() {
    return this.httpClient.get<any>(this.baseURL + "get_AllNotesShared");
  }
  getAllSharedNotesByUserId(userId: string) {
    return this.httpClient.get<any>(this.baseURL + "get_AllSharedNotesByUserId?userId=" + userId);
  }
  getAllPossibleNotes(userId: string, collectionId: string) {
    return this.httpClient.get<any>(this.baseURL + "get_AllPossibleNotes?userId=" + userId + "&collectionId=" + collectionId);
  }

}
