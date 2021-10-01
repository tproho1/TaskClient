import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IMovie } from "../_interfaces/movies";



@Injectable({
    providedIn: 'root'
})

export class MoviesService{
     

    constructor(private http: HttpClient){}


    getMovies(){
        return this.http.get<IMovie[]>('http://localhost:5000/api/movies');
    }

}