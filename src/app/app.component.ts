import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  pagetitle: string = 'client';

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.post("http://localhost:5000/api/account/guest",{
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem("guestjwt", token);
      
    }, err => {
      
    });
  }
}
