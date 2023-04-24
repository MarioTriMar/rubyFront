import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.css']
})
export class HeadNavComponent implements OnInit {
  username: string
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")!
  }
  logout(){
    localStorage.clear();
    this.router.navigate(["/home"])
  }
}
