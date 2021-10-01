import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
})

export class ImagesService{
     

    constructor(private http: HttpClient){}


    getMovieImage(movieTitle : string): Observable<Blob>{
        return this.http.get(`http://localhost:5000/api/images?pieceName=${movieTitle}`, {responseType: 'blob'});
    }

    getShowImage(showTitle : string){
        return this.http.get(`http://localhost:5000/api/images?pieceName=${showTitle}`, {responseType: 'blob'});
    }

}