import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:3000/api/"
  constructor(private httpClient:HttpClient) { }

  addUser(user: User):Observable<any>{
    return this.httpClient.post(this.baseURL+"add_user",user)
  }
  login(email:string, password:string){
    return this.httpClient.get<User>(this.baseURL+"login?email="+email+"&password="+password)
  }
}
