import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { IMovie } from "../_Interfaces/movies";
import { IRating } from "../_Interfaces/ratings";
import { Observable, throwError } from "rxjs";
import {catchError, tap} from 'rxjs/operators';
import { InterpolationConfig } from "@angular/compiler";



@Injectable({
    providedIn: 'root'
})

export class RatingsService{
     baseURL : string = "https://localhost:5001/api/";

    constructor(private http: HttpClient){}


    postRating(movieId : string, movieGrade : number): Observable<any>{
        let rating : IRating = {gradedPiece : movieId, grade : movieGrade, userid : "testUser" };
        

        const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );  
        const body=JSON.stringify(rating);
        console.log(body);
        return this.http.post<any>(this.baseURL + 'ratings',body,{'headers':headers , observe: 'response'});
        
        
    }
}