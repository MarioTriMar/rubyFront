import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Friendship } from './friendship';
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
  getAllUsers(){
    return this.httpClient.get<User[]>(this.baseURL+"get_allUsers");
  }
  updateUser(user: User):Observable<any> {
    return this.httpClient.put(this.baseURL+"update_user?_id="+user._id.$oid, user)
  }
  updatePassword(info:any):Observable<any>{
    return this.httpClient.put(this.baseURL+"update_password?userId="+info.userId, info)
  }
  getUserById(userId: string){
 
    return this.httpClient.get<User>(this.baseURL+"get_userById?_id="+userId)
  }
  getUsersContaining(username:string){
    return this.httpClient.get<User[]>(this.baseURL+"get_userContaining?username="+username);
  }
  createFriendshipRequest(friendship: Friendship):Observable<any>{
    return this.httpClient.post(this.baseURL+"create_friendshipRequest",friendship)
  }
  getFriendshipsRequestByUserId(userId:string){
    return this.httpClient.get<Friendship[]>(this.baseURL+"get_friendshipsRequestsByUserId?userB="+userId);
  }
  acceptFrienshipRequest(requestId:string):Observable<any>{
    return this.httpClient.put(this.baseURL+"accept_friendshipRequest?_id="+requestId, requestId)
  }
  rejectFrienshipRequest(requestId:string):Observable<any>{
    return this.httpClient.delete(this.baseURL+"reject_friendshipRequest?_id=" +requestId)
  }
  getHasFriendshipRequest(userA:string, userB:string){
    return this.httpClient.get<any>(this.baseURL+"get_hasFriendshipRequest?userA="+userA+"&userB="+userB);
  }
  getFriendshipRequestOfUsers(userA:string, userB:string){
    return this.httpClient.get<any>(this.baseURL+"get_FriendshipRequestOfUsers?userA="+userA+"&userB="+userB);
  }
  getAllFriends(userId:string){
    return this.httpClient.get<any[]>(this.baseURL+"get_allFriends?_id="+userId);
  }
}
