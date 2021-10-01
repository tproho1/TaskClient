import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IRating } from "../_interfaces/ratings";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
})

export class RatingsService{
     baseURL : string = "http://localhost:5000/api/";

    constructor(private http: HttpClient){}


    postRating(movieId : string, movieGrade : number): Observable<any>{
        
        let rating : IRating = {gradedPiece : movieId, grade : movieGrade, userid : "ea193f4c-1fd1-4e23-a7ca-8b0aca87abfa" };
        
        if(localStorage.getItem("jwt") != null){
            rating  = {gradedPiece : movieId, grade : movieGrade, userid : "747a8bab-1cf7-4275-bb32-321c8d6a3e2c" };
        }
        
            
        

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