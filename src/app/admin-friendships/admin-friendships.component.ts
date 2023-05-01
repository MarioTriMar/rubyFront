import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-friendships',
  templateUrl: './admin-friendships.component.html',
  styleUrls: ['./admin-friendships.component.css']
})
export class AdminFriendshipsComponent implements OnInit {
  friendships:any[];
  currentPageLength: ElementRef;
  totalPages: number;
  displayData: any;
  pagelength = [5]
  pageArray: any;
  first: boolean = true;
  page: number = 1;
  limit: number = 0;
  temp = true;
  startIndex = (this.page - 1) * this.limit;
  endIndex = this.page * this.limit;
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem("tokenSessionTipo")!="admin"){
      this.router.navigate(['/home'])
    }else{
      this.loadFriendships()
      this.nextPage();
      this.pageLengthChange(5);
    }
  }

  /*
  el friendships:Any es un json que tiene las siguiente claves:
  {
    "idRequest" que es el id de la relación
    "userA" 
    "userB" 
  }
  */
  loadFriendships(){
    this.userService.getAllFriendships().subscribe(data=>{
      this.friendships=data
    },error=>{
      console.log(error)
    })

  }
  /*
  Este metodo lo ejecutará un boton que estará en cada card
  Si en el html poneis en el  ngFor *ngFor="let friendship of friendships"
  cuando pongais el (click) pasadle al deleteFriendship(friendship.idRequest)
  */
  deleteFriendship(request:any){
    console.log(request.idRequest)
    this.userService.deleteFriendship(request.idRequest.$oid).subscribe(data=>{
      console.log(data)
      alert("Friendship deleted")
      this.ngOnInit();
    },error=>{
      console.log(error)
      alert("nose ha borrao puto")
    })
  }
  pageLengthChange(value: any) {
    this.first = false;
    this.limit = value;
    this.totalPages = Math.ceil(this.friendships.length / value);

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
    this.displayData = this.friendships.slice(this.startIndex, this.endIndex);
    console.log("display")
    console.log(this.displayData)
  }

  nextPage() {
    if (this.first == false) {
      if (this.endIndex < this.friendships.length) {
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
  decodedImage(image: string) {
    let decodedString = atob(image);
    let byteCharacters = decodedString.split('').map(char => char.charCodeAt(0));
    let byteArray = new Uint8Array(byteCharacters);
    let blob = new Blob([byteArray], { type: 'image/png' }); // replace with the actual image format
    let url = URL.createObjectURL(blob);
    console.log(url);
    return url

  }
}
