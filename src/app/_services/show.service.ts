import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IMovie } from "../_Interfaces/movies";
import { Observable, throwError } from "rxjs";
import {catchError, tap} from 'rxjs/operators';
import { IShow } from "../_Interfaces/shows";



@Injectable({
    providedIn: 'root'
})

export class ShowsService{
     

    constructor(private http: HttpClient){}


    getShows(){
        return this.http.get<IShow[]>('https://localhost:5001/api/shows');
    }
/*
    getMovies(): Observable<IMovie[]>{
        return this.http.get<IMovie[]>(this.movieUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    
    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else{
            errorMessage= `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }*/
}