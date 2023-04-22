import { Component, ElementRef, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {
  currentPageLength: ElementRef;
  totalPages: number;
  displayData: any;
  pagelength = [10, 15, 20, 30];
  pageArray: any;
  first: boolean = true;
  page: number = 1;
  limit: number = 0;
  temp = true;
  startIndex = (this.page - 1) * this.limit;
  endIndex = this.page * this.limit;
  state = true;
  user:User=new User();
  users: User[];
  constructor(private usersService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this.usersService.getAllUsers().subscribe(data=>{
      console.log(data)
      this.users=data
    },error =>{
      console.log(error)
    })
  }
  loadUser(user:User){
    this.state = false;
    if (Object.keys(user).length == 0) {
      console.error('Fallo al cargar el perfil. Error con el usuario seleccionado');
    }
    this.user = user
    console.log(this.user.type)
  }
  updateUser(user:User){
    let valido=true;
    if(this.user.username==undefined || this.user.username==""){
      alert("Username is required")
      valido=false
    }
    if(this.user.email==undefined || this.user.email=="") {
      alert("Email is required")
      valido=false
    }
    if(valido){
      this.usersService.updateUser(this.user).subscribe(data=>{
        alert("User updated")
        this.router.navigate(['/usersManagement']);
      }, (error)=>{
        console.log(error);
      })  
    }
  }
  pageLengthChange(value: any) {
    this.first = false;
    this.limit = value;
    this.totalPages = Math.ceil(this.users.length / value);

    this.display();
    return this.totalPages;
  }

  display() {
    let pages = [];
    this.startIndex = (this.page - 1) * this.limit;
    this.endIndex = this.page * this.limit;
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    this.pageArray = pages.slice(this.page - 1, this.page + 2);
    this.displayData = this.users.slice(this.startIndex, this.endIndex);
    console.log("display")
    console.log(this.displayData)
  }

  nextPage() {
    if (this.first == false) {
      if (this.endIndex < this.users.length) {
        this.page += 1;
        this.display();
      }
    }
  }
  goToPage(page: string) {
    console.log(page);
    this.page = parseInt(page);
    this.display();
  }
  PrevPage() {
    if (this.first == false) {
      if (this.startIndex > 0) {
        this.page -= 1;
        this.display();
      }
    }
  }

}
