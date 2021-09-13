import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { IMovie } from "../_Interfaces/movies";
import { Observable, throwError } from "rxjs";
import {catchError, tap} from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})

export class MoviesService{
     

    constructor(private http: HttpClient){}


    getMovies(){
        return this.http.get<IMovie[]>('https://localhost:5001/api/movies');
    }
    download(movieTitle:string): any {
        const headers= new HttpHeaders()
  .set('content-type', 'image/jpeg')
  .set('Access-Control-Allow-Origin', '*');
        return this.http.get('https://localhost:5001/api/movies/photo/?movieTitle='+movieTitle, {responseType:'blob'})
    }
    
  
}