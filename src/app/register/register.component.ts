import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User=new User();
  
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    let valido=true;
    if(this.user.username==undefined || this.user.username==""){
      alert("Username is required")
      valido=false
    }
    if(this.user.email==undefined || this.user.email==""){
      alert("Email is required")
      valido=false
    }
    if(this.user.password==undefined || this.user.password==""){
      alert("Password are required")
      valido=false
    }
    if(this.user.password2==undefined || this.user.password2==""){
      alert("Password are required")
      valido=false
    }
    if(valido){
      this.userService.addUser(this.user).subscribe(data=>{
        alert("User registered")
        this.router.navigate(['/home']);
      }, (error)=>{
        alert(error.error.message);
      })  
    }
  }

}
