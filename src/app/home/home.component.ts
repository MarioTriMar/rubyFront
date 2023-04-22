import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string
  password: string

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.userService.login(this.email, this.password).subscribe(data=>{
      localStorage.setItem("idUser", data._id)
      localStorage.setItem("username", data.username)
      localStorage.setItem("tokenSessionTipo", data.type)
      this.router.navigate(['/noteManagement']);
    }, (error)=>{
      alert(error.error.msg)
    })
  }
}
