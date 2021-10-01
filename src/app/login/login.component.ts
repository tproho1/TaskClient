import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin?: boolean;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }


  login(form: NgForm){
    const credentials = JSON.stringify(form.value);
    this.http.post("http://localhost:5000/api/account/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/"]);
    }, err => {
      this.invalidLogin = true
    });
  }

  
}
