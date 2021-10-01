import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isExpanded = false;
  isLogged = true;
  constructor() { }

  ngOnInit(): void {
    this.toggleLogin();
  }

  

  collapse() {
    this.isExpanded = false;
    this.toggleLogin();
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.toggleLogin()
  }
  logOut() {
    localStorage.removeItem("jwt");
    this.toggleLogin();
 }

 toggleLogin(){
  if (localStorage.getItem("jwt")?.length) {
    this.isLogged = false;
  } 
  else this.isLogged = true;
 }
 

}

